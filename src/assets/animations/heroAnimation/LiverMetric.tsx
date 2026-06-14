import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Metric {
  label: string;
  displayValue: string;
  target: number; // numeric target for animation
  prefix: string;
  suffix: string;
  change: string;
  positive: boolean;
}

const METRICS: Metric[] = [
  { label: 'Active Users', displayValue: '', target: 24.8, prefix: '', suffix: 'K', change: '+12.5%', positive: true },
  { label: 'Response', displayValue: '', target: 42, prefix: '', suffix: 'ms', change: '-8%', positive: true },
  { label: 'Uptime', displayValue: '', target: 99.99, prefix: '', suffix: '%', change: '+0.01%', positive: true },
];

interface LiveMetricsProps {
  className?: string;
}

export const LiveMetrics: React.FC<LiveMetricsProps> = ({ className = '' }) => {
  const prefersReduced = useReducedMotion();
  const [counts, setCounts] = useState<number[]>(
  prefersReduced ? METRICS.map((m) => m.target) : [0, 0, 0]
);

  useEffect(() => {
    

    const start = performance.now();
    const duration = 1800;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(METRICS.map((m) => m.target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [prefersReduced]);

  const formatValue = (metric: Metric, raw: number) => {
    if (metric.suffix === 'ms') {
        
      return `${Math.round(raw)}${metric.suffix}`;
    }
    if (metric.suffix === '%') {
      return `${raw.toFixed(2)}${metric.suffix}`;
    }
    return `${raw.toFixed(1)}${metric.suffix}`;
  };
const barWidths = [68, 82, 94];
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl shadow-xl shadow-black/40 h-full flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-b from-zinc-900 to-zinc-900/80 border-b border-zinc-800/80 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" />
          </svg>
          <span className="text-[10px] font-semibold text-zinc-300 uppercase tracking-wider">
            Live Metrics
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* Metrics */}
      <div className="p-3 space-y-2.5 flex-1">
        {METRICS.map((m, i) => (
          <div key={m.label}>
            <div className="flex items-baseline justify-between mb-0.5">
              <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-medium">
                {m.label}
              </span>
              <span
                className={`text-[9px] font-medium flex items-center gap-0.5 ${
                  m.positive ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M6 2L9 7H3L6 2Z" />
                </svg>
                {m.change}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-base font-semibold text-white tracking-tight font-mono">
                {formatValue(m, counts[i])}
              </span>
            </div>
            {/* Mini bar */}
            <div className="h-[3px] mt-1 rounded-full bg-zinc-800/80 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${barWidths[i]}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
