
import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  title: string;
  description: string;
  gradientClass: string;
  imageUrl?: string;
}

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="space-y-24">
      {products.map((product, index) => (
        <ProductItem
          key={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
