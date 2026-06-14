import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { CodeLine } from '../../../types/heroAnimation';

const SCRIPTS: CodeLine[][] = [
   [
  { text: "// AI Agent Platform", type: "comment" },
  { text: 'import { createAgent } from "@vynho/ai"', type: "keyword" },
  { text: 'import { memory } from "@vynho/memory"', type: "keyword" },
  { text: "", type: "plain" },
  { text: "const agent = createAgent({", type: "plain" },
  { text: '  model: "gpt-5",', type: "variable" },
  { text: "  memory: true,", type: "variable" },
  { text: "  tools: true,", type: "variable" },
  { text: "  streaming: true,", type: "variable" },
  { text: "});", type: "plain" },
  // { text: "", type: "plain" },
  { text: "agent.train(companyKnowledge);", type: "keyword" },
  { text: "agent.connectCRM();", type: "keyword" },
  { text: "agent.deploy();", type: "keyword" },
],

  [
  { text: "// Enterprise Software", type: "comment" },
  { text: 'import { buildSystem } from "@vynho/software"', type: "keyword" },
  { text: "", type: "plain" },
  { text: "const system = buildSystem({", type: "plain" },
  { text: '  modules: ["CRM","ERP","HRMS"],', type: "variable" },
  { text: '  cloud: "AWS",', type: "variable" },
  { text: '  database: "PostgreSQL",', type: "variable" },
  { text: '  monitoring: "enabled",', type: "variable" },
  { text: "});", type: "plain" },
  // { text: "", type: "plain" },
  { text: "system.runTests();", type: "keyword" },
  { text: "system.deploy();", type: "keyword" },
  { text: "system.monitor();", type: "keyword" },
],

  [
  { text: "// Technology Consulting", type: "comment" },
  { text: 'import { audit } from "@vynho/consulting"', type: "keyword" },
  { text: "", type: "plain" },
  { text: "const report = audit({", type: "plain" },
  { text: '  infrastructure: true,', type: "variable" },
  { text: '  security: true,', type: "variable" },
  { text: '  aiReadiness: true,', type: "variable" },
  { text: "});", type: "plain" },
  // { text: "", type: "plain" },
  { text: "report.generate();", type: "keyword" },
  { text: "report.present();", type: "keyword" },
],
[
  { text: "// Product Engineering", type: "comment" },
  { text: 'import { launchProduct } from "@vynho/product"', type: "keyword" },
  { text: "", type: "plain" },
  { text: "const product = launchProduct({", type: "plain" },
  { text: '  web: true,', type: "variable" },
  { text: '  mobile: true,', type: "variable" },
  { text: '  analytics: true,', type: "variable" },
  { text: '  aiFeatures: true,', type: "variable" },
  { text: "});", type: "plain" },
  // { text: "", type: "plain" },
  { text: "product.publish();", type: "keyword" },
  { text: "product.scale();", type: "keyword" },
],
];



// Syntax highlighting colors
const colors: Record<string, string> = {
  keyword: '#8B5CF6', // purple
  comment: '#525252', // gray
  string: '#06B6D4', // cyan
  function: '#3B82F6', // blue
  variable: '#F59E0B', // amber
  plain: '#D4D4D8', // light gray
};

interface CodeTerminalProps {
  className?: string;
}

export const CodeTerminal: React.FC<CodeTerminalProps> = ({ className = '' }) => {
  const [visibleChars, setVisibleChars] = useState(0);
const [scriptIndex, setScriptIndex] = useState(0);
const activeScript = SCRIPTS[scriptIndex];

  // Total characters for typewriter
  const totalChars = useMemo(
  () =>
    activeScript.reduce(
      (acc, line) => acc + line.text.length + 1,
      0
    ),
  [activeScript]
);
const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
if (isPaused) return;

    if (visibleChars >= totalChars) {
  const timeout = setTimeout(() => {
    setVisibleChars(0);

    setScriptIndex((prev) =>
      (prev + 1) % SCRIPTS.length
    );
  }, 3000);

  return () => clearTimeout(timeout);
}

    const timeout = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, 25); // 25ms per char → ~40 chars/sec
    return () => clearTimeout(timeout);
  }, [visibleChars, totalChars, isPaused]);

  // Calculate what's visible
  let charCount = 0;
  const visibleLines = activeScript.map((line) => {
    const lineStart = charCount;
    const lineEnd = charCount + line.text.length;
    charCount = lineEnd + 1; // +1 for newline

    let visibleText: string;
    if (visibleChars >= lineEnd) {
      visibleText = line.text;
    } else if (visibleChars <= lineStart) {
      visibleText = '';
    } else {
      visibleText = line.text.slice(0, visibleChars - lineStart);
    }

    return { ...line, visibleText };
  });

  return (
    <div onMouseEnter={() => {
    console.log("ENTER");
    setIsPaused(true);
  }}
  onMouseLeave={() => {
    console.log("LEAVE");
    setIsPaused(false);
  }}
      className={`relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 ${className}`}
      style={{ boxShadow: '0 20px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)' }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-zinc-900 to-zinc-900/80 border-b border-zinc-800/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <div
    className={`h-2 w-2 rounded-full ${
      isPaused ? "bg-yellow-400" : "bg-emerald-400"
    }`}
  />

  <span className="text-[10px] text-zinc-500 uppercase">
    {isPaused ? "Paused" : "Live"}
  </span>

          <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
            </svg>
          </div>
          <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
            dashboard.tsx
          </span>
        </div>
        <div className="w-16 flex items-center justify-end">
          <div className="text-[10px] text-zinc-600 font-mono">{visibleChars}/{totalChars}</div>
        </div>
      </div>

      {/* Code area */}
      <div className="p-4 font-mono text-[11px]">
  {visibleLines.map((line, i) => {
    const isCurrentLine =
      visibleChars >=
        activeScript.slice(0, i).reduce((a, l) => a + l.text.length + 1, 0) &&
      visibleChars <
        activeScript.slice(0, i + 1).reduce((a, l) => a + l.text.length + 1, 0);

    return (
      <div
        key={i}
        className="relative flex items-start h-6 leading-8"
      >
        {/* Line number */}
        <span className="w-8 shrink-0 text-right pr-4 text-[11px] text-zinc-700 select-none">
          {i + 1}
        </span>

        {/* Code */}
        <span style={{ color: colors[line.type] }}>
          {line.visibleText || "\u00A0"}
        </span>

        {isCurrentLine && visibleChars < totalChars && (
          <motion.span
            className="ml-0.5 inline-block h-4 w-[2px] bg-purple-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    );
  })}
</div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-zinc-900/60 border-t border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-zinc-500 font-mono">TypeScript</span>
          <span className="text-zinc-700">·</span>
          <span className="text-[10px] text-zinc-500 font-mono">LF</span>
          <span className="text-zinc-700">·</span>
          <span className="text-[10px] text-zinc-500 font-mono">UTF-8</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] text-zinc-500 font-mono">Ln {Math.min(visibleLines.filter((l) => l.visibleText).length + 1, activeScript.length)}, Col {visibleChars}</span>
        </div>
      </div>
    </div>
  );
};
