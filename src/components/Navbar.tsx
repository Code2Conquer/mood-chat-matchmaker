
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, CreditCard, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-xl text-primary-purple flex items-center">
              <span className="bg-primary-purple text-white p-1 rounded-md mr-2">AI</span>
              CharacterChat
            </Link>
          </div>
          
          <div className="hidden md:flex items-center flex-1 mx-6">
            <div className="relative w-full max-w-lg mx-auto">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Enter your mood to find your best chatmate..." 
                className="pl-10 pr-4 py-2 w-full rounded-full"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/chats">
                <MessageSquare size={20} className="mr-1" />
                <span className="hidden sm:inline">Chats</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/payments">
                <CreditCard size={20} className="mr-1" />
                <span className="hidden sm:inline">Payments</span>
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">
                <LogIn size={20} className="mr-1" />
                <span>Login</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="md:hidden px-4 py-2 border-t border-border">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Find your chatmate..." 
            className="pl-10 pr-4 py-2 w-full rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
