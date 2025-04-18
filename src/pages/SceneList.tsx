
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import SceneCard from "@/components/SceneCard";
import { SCENES } from "@/data/scenes";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SceneList = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter scenes based on category
  let scenes = [...SCENES];
  let title = "All Scenes";
  
  if (category && category.toLowerCase() === 'relaxing') {
    title = "Relaxing Scenes";
    scenes = scenes.filter(scene => scene.category === "Relaxing");
  } else if (category && category.toLowerCase() === 'engaging') {
    title = "Engaging Scenes";
    scenes = scenes.filter(scene => scene.category === "Engaging");
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
          {scenes.map(scene => (
            <SceneCard
              key={scene.id}
              {...scene}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SceneList;
