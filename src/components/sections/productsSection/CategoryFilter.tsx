import React from 'react';
import type { Category } from '../../../types/product';

interface CategoryFilterProps {
  categories: Category[];
  active: Category;
  onChange: (category: Category) => void;
  counts?: Partial<Record<Category, number>>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  active,
  onChange,
  counts = {},
}) => {
  return (
    <div className="-mx-6 px-6 overflow-x-auto">
      <div className="flex items-center gap-2 w-max">
        {categories.map((cat) => {
          const isActive = active === cat;
          const count = counts[cat] ?? 0;

          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white text-black'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
              aria-pressed={isActive}
            >
              {cat}
              <span
                className={`ml-2 text-xs ${
                  isActive ? 'text-zinc-500' : 'text-zinc-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
