
import { useState } from 'react';
import { Star, Calendar } from 'lucide-react';
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
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Link 
      to={`/chat/${id}`}
      className="character-card card-hover block w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovering ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
          <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
          <span className="text-xs font-medium">{rating.toFixed(1)}</span>
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
    </Link>
  );
};

export default CharacterCard;
