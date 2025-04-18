
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MoreVertical, Star, Phone, Video } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import { CHARACTERS } from '@/data/characters';

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{
    id: string;
    message: string;
    sender: 'user' | 'ai';
    timestamp: string;
  }>>([]);
  const [character, setCharacter] = useState<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Find the character with the matching id
    const foundCharacter = CHARACTERS.find(char => char.id === id);
    if (foundCharacter) {
      setCharacter(foundCharacter);
      // Add initial message from AI character
      setMessages([
        {
          id: '1',
          message: foundCharacter.greeting,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } else {
      navigate('/'); // Redirect if character not found
    }
  }, [id, navigate]);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessageId = Date.now().toString();
    const userMessage = {
      id: userMessageId,
      message: message,
      sender: 'user' as const,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        message: getAiResponse(message),
        sender: 'ai' as const,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  
  // Simple function to simulate AI responses
  const getAiResponse = (userMessage: string) => {
    const lowercaseMsg = userMessage.toLowerCase();
    
    if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
      return `Hello! It's great to chat with you! ${character?.aiStyle || ''}`;
    } else if (lowercaseMsg.includes('how are you')) {
      return `I'm doing wonderful, thanks for asking! ${character?.aiStyle || ''} How about you?`;
    } else if (lowercaseMsg.includes('name')) {
      return `My name is ${character?.name || 'AI'}! ${character?.aiStyle || ''} What's yours?`;
    } else {
      return `That's interesting! Tell me more about that. ${character?.aiStyle || ''}`;
    }
  };
  
  if (!character) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-accent-blue/5">
      <header className="bg-white border-b border-border sticky top-0 z-30 p-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src={character.image} />
              <AvatarFallback className="bg-primary-light text-primary-purple">
                {character.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold">{character.name}</h2>
              <div className="flex items-center text-xs text-muted-foreground">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                <span>{character.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map(msg => (
            <ChatMessage
              key={msg.id}
              message={msg.message}
              sender={msg.sender}
              timestamp={msg.timestamp}
              characterImage={character.image}
              characterName={character.name}
            />
          ))}
          <div ref={chatEndRef} />
        </div>
        
        <div className="p-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
};

export default Chat;
