
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  title: string;
  description: string;
  imageUrl?: string;
  isReversed?: boolean;
  showDetailedInfo?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ 
  title, 
  description, 
  imageUrl = "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
  isReversed = false,
  showDetailedInfo = false
}) => {
  const navigate = useNavigate();
  
  const getProductRoute = (productTitle: string): string | null => {
    const routes: Record<string, string> = {
      "APFC Panel": "/products/apfc-panel",
      "HT Panel": "/products/ht-panel",
      "LT Panel": "/products/lt-panel",
      "STP Panel": "/products/stp-panel",
      "ETP Panel": "/products/etp-panel",
    };
    return routes[productTitle] || null;
  };
  
  const handleLearnMore = () => {
    const route = getProductRoute(title);
    if (route) {
      navigate(route);
    }
  };
  
  const hasDetailPage = getProductRoute(title) !== null;
  
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-brand-black">{title}</h3>
        <div className="h-1 w-20 bg-brand-red"></div>
        <p className="text-gray-700 text-lg">{description}</p>
        
        <Button 
          variant="outline" 
          className="mt-4 group bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 hover:shadow-md transition-all duration-300"
          onClick={handleLearnMore}
        >
          Learn more 
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
