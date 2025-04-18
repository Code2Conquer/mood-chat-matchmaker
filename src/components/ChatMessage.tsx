
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'ai';
  timestamp: string;
  characterImage?: string;
  characterName?: string;
}

const ChatMessage = ({ message, sender, timestamp, characterImage, characterName }: ChatMessageProps) => {
  const isAi = sender === 'ai';
  
  return (
    <div className={cn(
      "flex gap-3 mb-4",
      isAi ? "justify-start" : "justify-end"
    )}>
      {isAi && (
        <Avatar className="h-10 w-10 border border-border">
          <AvatarImage src={characterImage} />
          <AvatarFallback className="bg-primary-light text-primary-purple">
            {characterName?.substring(0, 2).toUpperCase() || 'AI'}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[80%]",
        isAi ? "order-2" : "order-1"
      )}>
        <div className={cn(
          "px-4 py-3 rounded-2xl",
          isAi ? "bg-secondary text-foreground rounded-tl-none" : "bg-primary-purple text-white rounded-tr-none"
        )}>
          <p className="text-sm">{message}</p>
        </div>
        <p className={cn(
          "text-xs mt-1 text-muted-foreground",
          isAi ? "text-left" : "text-right"
        )}>
          {timestamp}
        </p>
      </div>
      
      {!isAi && (
        <Avatar className="h-10 w-10 border border-border order-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-primary-purple text-white">
            ME
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
