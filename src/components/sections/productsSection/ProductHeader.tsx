import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {badge && (
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900/60 border border-zinc-800 rounded-full mb-5">
          {badge.icon ?? (
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          )}
          <span className="text-xs font-medium text-zinc-300 tracking-wide">
            {badge.text}
          </span>
        </div>
      )}

      <h1 className="text-5xl font-semibold text-cyan-400 font-heading leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-base text-text-muted font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
