
import { useState } from 'react';
import { Send, Mic, Image, Smile } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t border-border bg-card p-4 rounded-b-lg"
    >
      <div className="flex items-end gap-2">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[60px] resize-none pr-12"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <div className="absolute bottom-2 right-2 flex space-x-1">
            <Button type="button" size="icon" variant="ghost" className="h-8 w-8 rounded-full">
              <Smile className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button type="button" size="icon" variant="ghost" className="h-8 w-8 rounded-full">
              <Image className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="button" size="icon" variant="outline" className="rounded-full h-10 w-10">
            <Mic className="h-4 w-4" />
          </Button>
          <Button type="submit" size="icon" className="rounded-full h-10 w-10">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
