import React from 'react';

// Core product interface
export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  badge?: BadgeType;
  startingPrice: string;
  metric: Metric;
  useCases: string[];
  integrations: number;
  featured?: boolean;
}

export interface Metric {
  value: string;
  label: string;
}

export type BadgeType = 'Popular' | 'New' | 'Enterprise';

export type Category = 'All' | 'AI' | 'Data' | 'Creative' | 'Operations' | 'Vision' | 'Security';
