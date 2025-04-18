
import React, { useState } from 'react';
import { Star, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

export interface CharacterProps {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  lastChat?: string;
  labels: string[];
}

const CharacterCard = ({ id, name, image, description, rating, lastChat, labels }: CharacterProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };
  
  return (
    <div 
      className={`character-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
              <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
              <span className="text-xs font-medium text-white">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {labels.map((label, index) => (
                <Badge key={index} variant="secondary" className="text-xs">{label}</Badge>
              ))}
            </div>
            
            {lastChat && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Last chat: {lastChat}</span>
              </div>
            )}
          </div>
        </div>

        <div className="card-back p-6 flex flex-col justify-center items-center text-center">
          <h4 className="font-semibold mb-4">What People Love About {name}</h4>
          <p className="text-muted-foreground mb-6">
            Users appreciate {name}'s insightful conversations and unique perspective on {labels[0].toLowerCase()} topics.
          </p>
          <Link 
            to={`/chat/${id}`}
            className="flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-full transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start Chatting</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
