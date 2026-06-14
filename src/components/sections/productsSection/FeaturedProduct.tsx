import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../../../types/product';
import { Badge } from '../../ui/Badge';
import { fadeUp } from '../../../assets/animations/productAnimation';

interface FeaturedProductProps {
  product: Product;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: (product: Product) => void;
  onSecondaryAction?: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  product,
  onPrimaryAction,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-10 md:p-12 hover:border-zinc-700 transition-all duration-500"
    >
      {/* Corner glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: content */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-cyan-400">
              {product.icon}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {product.category}
              </span>
              {product.badge && <Badge type={product.badge} />}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
            {product.title}
          </h2>
          <p className="text-lg text-cyan-400/90 mb-4 font-medium">
            {product.tagline}
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Use cases */}
          <div className="mb-8">
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Common use cases
            </div>
            <div className="flex flex-wrap gap-2">
              {product.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="text-xs text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 px-3 py-1.5 rounded-full"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onPrimaryAction?.(product)}
              className="px-5 py-2.5 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition-colors text-sm"
            >
              Coming soon
            </button>
            <span className="text-sm text-zinc-500">
              from <span className="text-white font-medium">{product.startingPrice}</span>/mo
            </span>
          </div>
        </div>

        {/* Right: metrics panel */}
        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
              Key metric
            </div>
            <div className="text-5xl font-semibold text-white tracking-tight">
              {product.metric.value}
            </div>
            <div className="text-sm text-zinc-400 mt-1">{product.metric.label}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Integrations
              </div>
              <div className="text-2xl font-semibold text-white">
                {product.integrations}+
              </div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Deployment
              </div>
              <div className="text-2xl font-semibold text-white">Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
