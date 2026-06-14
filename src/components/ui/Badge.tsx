import React from 'react';
import type { BadgeType } from '../../types/product';

interface BadgeProps {
  type: BadgeType;
}

const styles: Record<BadgeType, string> = {
  Popular: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  New: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Enterprise: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full border ${styles[type]}`}
    >
      {type}
    </span>
  );
};
