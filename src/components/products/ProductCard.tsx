
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  gradientClass: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, gradientClass }) => {
  return (
    <Card className={`h-full ${gradientClass} border-none shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-brand-red">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
