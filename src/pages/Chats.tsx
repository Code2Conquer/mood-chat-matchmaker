
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Star, Clock, ArrowLeft } from 'lucide-react';
import { CHARACTERS } from "@/data/characters";
import { SCENES } from "@/data/scenes";

// Mocked chat history data
const chatHistory = [
  {
    id: 'chat1',
    characterId: 'char-1',
    lastMessage: "The Andromeda galaxy is actually on a collision course with our Milky Way!",
    timestamp: "Today, 10:23 AM"
  },
  {
    id: 'chat2',
    characterId: 'char-3',
    lastMessage: "It's important to acknowledge those feelings and give yourself permission to process them.",
    timestamp: "Yesterday, 8:45 PM"
  },
  {
    id: 'chat3',
    sceneId: 'scene-3',
    lastMessage: "I found another clue! Look at these strange markings on the wall...",
    timestamp: "Apr 15, 2025"
  },
  {
    id: 'chat4',
    characterId: 'char-6',
    lastMessage: "The Byzantine Empire's fall in 1453 marked the end of the Middle Ages for many historians.",
    timestamp: "Apr 10, 2025"
  },
  {
    id: 'chat5',
    characterId: 'char-4',
    lastMessage: "Try refactoring that function to use async/await instead of promises.",
    timestamp: "Apr 5, 2025"
  }
];

const Chats = () => {
  return (
    <div className="min-h-screen bg-accent-blue/5">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Your Chats</h1>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search in chats..." 
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        
        <Tabs defaultValue="recent" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recent">
              <Clock className="h-4 w-4 mr-2" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <Star className="h-4 w-4 mr-2" />
              Favorites
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="space-y-3">
          {chatHistory.map(chat => {
            // Find character or scene info
            const isScene = !!chat.sceneId;
            const entityId = isScene ? chat.sceneId : chat.characterId;
            const entity = isScene 
              ? SCENES.find(scene => scene.id === entityId)
              : CHARACTERS.find(char => char.id === entityId);
            
            if (!entity) return null;
            
            const name = isScene ? entity.title : entity.name;
            const image = entity.image;
            const linkPath = isScene ? `/scene/${entityId}` : `/chat/${entityId}`;
            
            return (
              <Link 
                key={chat.id}
                to={linkPath}
                className="block bg-white rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={image} />
                    <AvatarFallback className="bg-primary-light text-primary-purple">
                      {name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium truncate">{name}</h3>
                      <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Chats;
