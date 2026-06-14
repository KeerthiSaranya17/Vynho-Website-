import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../../types/product';
import { Badge } from '../ui/Badge';
import { fadeUp } from '../../assets/animations/productAnimation';

interface ProductCardProps {
  product: Product;
  onExplore?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onExplore }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex flex-col bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-6 mb-5">
        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
          {product.icon}
        </div>
        {product.badge && <Badge type={product.badge} />}
      </div>

      {/* Category label */}
      <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
        {product.category}
      </div>

      {/* Title + tagline */}
      <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
        {product.title}
      </h3>
      <p className="text-sm text-cyan-400/90 mb-4">{product.tagline}</p>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {product.description}
      </p>

      {/* Use cases */}
      <div className="mb-5">
        <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
          Use cases
        </div>
        <div className="flex flex-wrap gap-1.5">
          {product.useCases.map((useCase) => (
            <span
              key={useCase}
              className="text-[11px] text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 px-2 py-1 rounded"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="pt-5 border-t border-zinc-800/80 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xl font-semibold text-white tracking-tight">
              {product.metric.value}
            </div>
            <div className="text-[11px] text-zinc-500">{product.metric.label}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white font-medium">
              {product.startingPrice}
              <span className="text-zinc-500 text-xs">/mo</span>
            </div>
            <div className="text-[11px] text-zinc-500">
              {product.integrations}+ integrations
            </div>
          </div>
        </div>
        <button
          onClick={() => onExplore?.(product)}
          className="w-full flex items-center justify-center text-sm font-medium text-white bg-white/5 border border-zinc-700 hover:border-zinc-600 hover:bg-white/10 py-2.5 rounded-md transition-colors group/btn"
        >
          Explore product
          <svg
            className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
