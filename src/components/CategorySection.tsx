
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  viewAllLink: string;
  children: React.ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, viewAllLink, children }) => {
  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link 
          to={viewAllLink}
          className="text-sm font-medium text-primary-purple flex items-center hover:underline"
        >
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
