
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import { CHARACTERS } from "@/data/characters";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CharacterList = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter characters based on category
  let characters = [...CHARACTERS];
  let title = "All Characters";
  
  if (category === 'top') {
    title = "Top Rated Characters";
    characters.sort((a, b) => b.rating - a.rating);
  } else if (category === 'loved') {
    title = "Most Loved Characters";
    // In a real app, this would be based on user preferences or regional popularity
  }
  
  return (
    <div className="min-h-screen bg-accent-blue/5">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6 gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map(character => (
            <CharacterCard 
              key={character.id} 
              {...character} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CharacterList;
