
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from 'lucide-react';

export interface SceneProps {
  id: string;
  title: string;
  image: string;
  description: string;
  character: string;
  category: string;
}

const SceneCard = ({ id, title, image, description, character, category }: SceneProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      setIsFlipped(prev => !prev);
    }
  };

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };
  
  return (
    <div 
      className={`scene-card ${isFlipped ? 'flipped' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <Badge className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white border-none" variant="secondary">
              {category}
            </Badge>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
            <p className="text-xs text-primary-purple font-medium">with {character}</p>
          </div>
        </div>

        <div className="card-back p-6 flex flex-col justify-center items-center text-center">
          <h4 className="font-semibold mb-4">Why People Love This Scene</h4>
          <p className="text-muted-foreground mb-6">
            Users find this {category.toLowerCase()} scene perfect for meaningful conversations with {character}.
          </p>
          <Link 
            to={`/scene/${id}`}
            className="flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-full transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enter Scene</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SceneCard;
