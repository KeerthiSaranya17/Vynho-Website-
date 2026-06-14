import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../../../types/product';
import { stagger } from '../../../assets/animations/productAnimation';
import { ProductCard } from '../../cards/ProductCard';

interface ProductGridProps {
  products: Product[];
  onExplore?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onExplore }) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-zinc-500">
        No products in this category.
      </div>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onExplore={onExplore}
        />
      ))}
    </motion.div>
  );
};
