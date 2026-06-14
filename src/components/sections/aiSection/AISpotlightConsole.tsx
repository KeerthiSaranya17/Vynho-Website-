import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { spotlightConsoleModes } from "../../../data/aiPage";
import { smoothEase } from "../../../lib/motion";

export function AISpotlightConsole() {
  const [activeMode, setActiveMode] = useState(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 28, mass: 0.2 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 28, mass: 0.2 });
  const glow = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(103,232,249,0.22), transparent 24%), linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.1), rgba(236,72,153,0.06))`;
  const active = spotlightConsoleModes[activeMode];

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <motion.div
      className="relative overflow-hidden py-12 rounded-4xl border border-white/10 bg-black/45 shadow-[0_0_120px_rgba(34,211,238,0.12)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: smoothEase }}
    >
      <motion.div className="absolute inset-0" style={{ background: glow }} />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/75">Vynho AI command layer</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tighter text-white sm:text-4xl">Tap a stage to preview the delivery flow.</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {spotlightConsoleModes.map((mode, index) => (
              <motion.button
                type="button"
                key={mode.label}
                onClick={() => setActiveMode(index)}
                onMouseEnter={() => setActiveMode(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  activeMode === index
                    ? "border-cyan-200/70 bg-cyan-200 text-black shadow-[0_0_34px_rgba(103,232,249,0.35)]"
                    : "border-white/12 bg-white/5 text-white/62 hover:border-cyan-200/50 hover:text-white"
                }`}
              >
                {mode.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="relative py-12">
          <div className="absolute left-4 right-4 top-1/2 h-px bg-linear-to-r from-cyan-200/10 via-cyan-200/50 to-violet-300/10" />
          <motion.div
            className="absolute left-4 top-1/2 h-px w-28 bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_28px_rgba(103,232,249,0.8)]"
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid gap-4 md:grid-cols-4">
            {spotlightConsoleModes.map((mode, index) => (
              <motion.button
                type="button"
                key={mode.title}
                onClick={() => setActiveMode(index)}
                onMouseEnter={() => setActiveMode(index)}
                className="group text-left"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`relative flex min-h-36 flex-col justify-between rounded-3xl border p-5 backdrop-blur-md transition ${
                    activeMode === index
                      ? "border-cyan-200/70 bg-cyan-200/12 shadow-[0_0_45px_rgba(103,232,249,0.18)]"
                      : "border-white/10 bg-black/35 hover:border-white/24 hover:bg-white/8"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">0{index + 1}</span>
                  <span className="mt-8 text-xl font-medium tracking-[-0.04em] text-white">{mode.label}</span>
                  {activeMode === index && (
                    <motion.span
                      layoutId="active-stage-glow"
                      className="absolute -bottom-1 left-5 right-5 h-0.5 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.8)]"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div key={active.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/75">Selected flow</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">{active.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">{active.copy}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {active.signals.map((signal) => (
                <motion.div
                  key={signal}
                  className="border-b border-white/10 pb-3 text-sm text-white/72"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {signal}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`${active.title}-terminal`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#040407]/80 p-5 font-mono text-sm text-cyan-50/80"
          >
            <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300/80" />
              <span className="ml-auto text-xs uppercase tracking-[0.24em] text-white/35">live preview</span>
            </div>
            <div className="space-y-4">
              {active.terminal.map((line, index) => (
                <motion.div
                  key={line}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.32, delay: index * 0.08 }}
                >
                  <span className="text-cyan-300">&gt;</span>
                  <span>{line}</span>
                  <motion.span className="ml-auto h-1.5 w-20 overflow-hidden rounded-full bg-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + index * 0.08 }}>
                    <motion.span
                      className="block h-full rounded-full bg-linear-to-r from-cyan-300 to-violet-300"
                      initial={{ width: "8%" }}
                      animate={{ width: `${58 + index * 12}%` }}
                      transition={{ duration: 0.8, delay: 0.18 + index * 0.08, ease: smoothEase }}
                    />
                  </motion.span>
                </motion.div>
              ))}
              <motion.div
                className="inline-flex items-center gap-2 pt-2 text-cyan-200"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>awaiting next AI workflow</span>
                <span className="h-4 w-2 bg-cyan-200" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}