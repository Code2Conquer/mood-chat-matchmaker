import { useState } from 'react';
import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import CharacterCard from "@/components/CharacterCard";
import SceneCard from "@/components/SceneCard";
import { CHARACTERS } from "@/data/characters";
import { SCENES } from "@/data/scenes";
const Index = () => {
  const topRatedCharacters = [...CHARACTERS].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const mostLovedCharacters = [...CHARACTERS].sort(() => Math.random() - 0.5).slice(0, 4); // Random for demo
  const relaxingScenes = SCENES.filter(scene => scene.category === "Relaxing").slice(0, 4);
  const engagingScenes = SCENES.filter(scene => scene.category === "Engaging").slice(0, 4);
  return <div className="min-h-screen bg-gradient-to-br from-accent-blue/10 via-white to-accent-pink/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-dark">Vibe live with Characters &amp; Scenes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect AI chatmate based on your mood or explore immersive scenes with interesting characters.
          </p>
        </div>
        
        <CategorySection title="Top Rated Characters" viewAllLink="/characters/top">
          {topRatedCharacters.map(character => <CharacterCard key={character.id} {...character} />)}
        </CategorySection>
        
        <CategorySection title="Most Loved in Your Area" viewAllLink="/characters/loved">
          {mostLovedCharacters.map(character => <CharacterCard key={character.id} {...character} />)}
        </CategorySection>
        
        <CategorySection title="Relaxing Scenes" viewAllLink="/scenes/relaxing">
          {relaxingScenes.map(scene => <SceneCard key={scene.id} {...scene} />)}
        </CategorySection>
        
        <CategorySection title="Engaging Scenes" viewAllLink="/scenes/engaging">
          {engagingScenes.map(scene => <SceneCard key={scene.id} {...scene} />)}
        </CategorySection>
      </main>
      
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 CharacterChat. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;