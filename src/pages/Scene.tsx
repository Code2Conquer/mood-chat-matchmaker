
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MoreVertical, Star } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import { SCENES } from '@/data/scenes';
import { CHARACTERS } from '@/data/characters';

const Scene = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{
    id: string;
    message: string;
    sender: 'user' | 'ai';
    timestamp: string;
  }>>([]);
  const [scene, setScene] = useState<any>(null);
  const [character, setCharacter] = useState<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Find the scene with the matching id
    const foundScene = SCENES.find(s => s.id === id);
    if (foundScene) {
      setScene(foundScene);
      
      // Find the character for this scene
      const sceneCharacter = CHARACTERS.find(char => char.name === foundScene.character);
      setCharacter(sceneCharacter);
      
      // Add initial message for the scene
      setMessages([
        {
          id: '1',
          message: foundScene.introMessage,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } else {
      navigate('/'); // Redirect if scene not found
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
  
  // Simple function to simulate AI responses in the scene context
  const getAiResponse = (userMessage: string) => {
    const lowercaseMsg = userMessage.toLowerCase();
    
    if (scene && character) {
      if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
        return `Hello there! Welcome to ${scene.title}. ${character?.aiStyle || ''}`;
      } else if (lowercaseMsg.includes('what is this place') || lowercaseMsg.includes('where')) {
        return `We're in ${scene.title}. ${scene.description} ${character?.aiStyle || ''}`;
      } else if (lowercaseMsg.includes('who are you')) {
        return `I'm ${character.name}. ${character.description} ${character?.aiStyle || ''}`;
      } else {
        return `*Staying in the context of ${scene.title}* ${scene.responseStyle} ${character?.aiStyle || ''}`;
      }
    }
    
    return "I'm here to chat with you. What would you like to talk about?";
  };
  
  if (!scene || !character) {
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
            <div className="flex-shrink-0">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={character.image} />
                <AvatarFallback className="bg-primary-light text-primary-purple">
                  {character.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h2 className="font-bold">{scene.title}</h2>
              <p className="text-xs text-muted-foreground">with {character.name}</p>
            </div>
          </div>
          
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
        <div className="relative">
          <img 
            src={scene.image} 
            alt={scene.title} 
            className="w-full h-36 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
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

export default Scene;
