import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CodeTerminal } from '../heroAnimation/CodeTerminal';
import { LiveMetrics } from '../heroAnimation/LiverMetric';
import { OutputPreview } from '../heroAnimation/OutputPreview';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ className = '' }) => {
  const prefersReduced = useReducedMotion();
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const terminalRef = React.useRef<HTMLDivElement>(null);
  const metricsRef = React.useRef<HTMLDivElement>(null);
  const outputRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const updateLines = () => {
      if (!terminalRef.current || !metricsRef.current || !outputRef.current || !containerRef.current) return;
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    // Small delay to let layout settle
    const timeout = setTimeout(updateLines, 100);
    return () => {
      window.removeEventListener('resize', updateLines);
      clearTimeout(timeout);
    };
  }, [ prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[820px] mx-auto ${className}`}
      style={{ minHeight: 480 }}
    >

      {/* Responsive grid layout */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
        {/* Left column: Terminal (takes 3 cols on sm+, full on mobile) */}
        <div className="sm:col-span-3" ref={terminalRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: hoveredPanel === 'terminal' ? 1.02 : 1,
            }}
            transition={{
              opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
              y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
              scale: { duration: 0.25, ease: 'easeOut' },
            }}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredPanel('terminal')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <CodeTerminal />
          </motion.div>
        </div>

        {/* Right column: Metrics + Output stacked (takes 2 cols on sm+, full row below on mobile) */}
        <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-4">
          <div ref={metricsRef}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: hoveredPanel === 'metrics' ? 1.04 : 1,
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
                x: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
                scale: { duration: 0.25, ease: 'easeOut' },
              }}
              className="cursor-pointer h-full"
              onMouseEnter={() => setHoveredPanel('metrics')}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <LiveMetrics />
            </motion.div>
          </div>

          <div ref={outputRef}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: hoveredPanel === 'output' ? 1.04 : 1,
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                x: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                scale: { duration: 0.25, ease: 'easeOut' },
              }}
              className="cursor-pointer h-full"
              onMouseEnter={() => setHoveredPanel('output')}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <OutputPreview />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
