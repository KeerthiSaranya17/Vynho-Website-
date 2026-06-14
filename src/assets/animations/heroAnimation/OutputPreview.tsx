import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface OutputPreviewProps {
  className?: string;
}

// Simple chart data
const CHART_DATA = [42, 48, 55, 62, 58, 71, 80, 76, 88, 95, 92, 100, 108, 112, 118, 125, 130, 128, 135, 142];
const SPARKLINE_DATA = [20, 28, 35, 42, 38, 50, 58, 55, 62, 68, 72, 78];

export const OutputPreview: React.FC<OutputPreviewProps> = ({ className = '' }) => {
  const prefersReduced = useReducedMotion();
  const [animChart, setAnimChart] = useState<number[]>(
  prefersReduced
    ? CHART_DATA
    : Array(CHART_DATA.length).fill(0)
);

  useEffect(() => {
    // if (prefersReduced) {
    //   setAnimChart(CHART_DATA);
    //   return;
    // }
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setAnimChart((prev) =>
        prev.map((_, i) => (i < step ? CHART_DATA[i] : 0))
      );
      if (step >= CHART_DATA.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  // Build SVG path from points
  const toPath = (points: number[], width: number, height: number, max: number) => {
    if (points.length === 0) return '';
    const stepX = width / (points.length - 1);
    return points
      .map((val, i) => {
        const x = i * stepX;
        const y = height - (val / max) * height;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const toAreaPath = (points: number[], width: number, height: number, max: number) => {
    if (points.length === 0) return '';
    const stepX = width / (points.length - 1);
    const pathPoints = points
      .map((val, i) => {
        const x = i * stepX;
        const y = height - (val / max) * height;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
    return `M 0,${height} L ${pathPoints} L ${width},${height} Z`;
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl shadow-xl shadow-black/40 h-full flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-b from-zinc-900 to-zinc-900/80 border-b border-zinc-800/80 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 15l4-4 3 3 5-6" />
          </svg>
          <span className="text-[10px] font-semibold text-zinc-300 uppercase tracking-wider">
            Output
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-zinc-500 font-mono">
          <span className="px-1.5 py-0.5 rounded bg-zinc-800/80">24H</span>
          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">7D</span>
        </div>
      </div>

      {/* Chart + stats */}
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between mb-2 flex-shrink-0">
          <div>
            <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-0.5">Revenue</div>
            <div className="text-xl font-bold text-white tracking-tight font-mono">$142.8K</div>
          </div>
          <div className="text-right">
            <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-0.5">Growth</div>
            <div className="text-[11px] font-semibold text-emerald-400 flex items-center justify-end gap-0.5">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 12 12">
                <path d="M6 2L9 7H3L6 2Z" />
              </svg>
              +32.4%
            </div>
          </div>
        </div>

        {/* Main chart */}
        <div className="relative h-[70px] flex-shrink-0">
          <svg viewBox="0 0 300 70" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="outputChartArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="outputChartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <motion.path
              d={toAreaPath(animChart, 300, 70, 160)}
              fill="url(#outputChartArea)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.path
              d={toPath(animChart, 300, 70, 160)}
              fill="none"
              stroke="url(#outputChartLine)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Sparklines */}
        <div className="grid grid-cols-3 gap-2 mt-auto pt-2 border-t border-zinc-800/60">
          {['Users', 'API', 'AI'].map((label, i) => (
            <div key={label}>
              <div className="text-[8px] text-zinc-500 uppercase tracking-wider mb-0.5">{label}</div>
              <svg viewBox="0 0 60 18" className="w-full h-4">
                <motion.path
                  d={toPath(SPARKLINE_DATA, 60, 18, 80)}
                  fill="none"
                  stroke={['#3B82F6', '#8B5CF6', '#06B6D4'][i]}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 + i * 0.15 }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
