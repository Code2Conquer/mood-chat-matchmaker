
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

export interface SceneProps {
  id: string;
  title: string;
  image: string;
  description: string;
  character: string;
  category: string;
}

const SceneCard = ({ id, title, image, description, character, category }: SceneProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Link 
      to={`/scene/${id}`}
      className="scene-card card-hover block w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovering ? 'scale(1.05)' : 'scale(1)' }}
        />
        <Badge className="absolute top-2 right-2" variant="secondary">
          {category}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <p className="text-xs text-primary-purple font-medium">with {character}</p>
      </div>
    </Link>
  );
};

export default SceneCard;
