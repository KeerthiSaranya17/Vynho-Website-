import { useEffect, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type NodeItem = {
  label: string;
  detail: string;
  x: number;
  y: number;
  color: string;
  route: string;
};

const nodes: NodeItem[] = [
  { label: "Software", detail: "Custom platforms", x: 102, y: 150, color: "#7c72ff", route: "M350 338 Q218 206 102 150" },
  { label: "Consulting", detail: "AI + IT strategy", x: 566, y: 148, color: "#22d3ee", route: "M350 338 Q442 190 566 148" },
  { label: "SaaS", detail: "MVP to growth", x: 612, y: 394, color: "#a78bfa", route: "M350 338 Q478 314 612 394" },
  { label: "AI", detail: "Agents + copilots", x: 354, y: 590, color: "#38bdf8", route: "M350 338 Q392 462 354 590" },
  { label: "Products", detail: "Web + mobile", x: 78, y: 430, color: "#5146f4", route: "M350 338 Q210 372 78 430" },
];

const metrics = ["latency 18ms", "uptime 99.9%", "global-ready"];

export default function AboutHeroVisual() {
  const [active, setActive] = useState(3);
  const [isInteracting, setIsInteracting] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 17 });
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 17 });
  const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const spotlightX = useTransform(smoothX, [-1, 1], [22, 78]);
  const spotlightY = useTransform(smoothY, [-1, 1], [22, 78]);
  const spotlight = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(81,70,244,0.48), transparent 30%), radial-gradient(circle at 50% 50%, rgba(34,211,238,0.18), transparent 46%)`,
  );
  const activeNode = nodes[active];

  useEffect(() => {
    if (isInteracting) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % nodes.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [isInteracting]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    setIsInteracting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
      className="relative hidden items-center justify-center lg:flex"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={resetPointer}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative h-148 w-150 cursor-crosshair"
      >
        <motion.div style={{ background: spotlight }} className="absolute inset-0 rounded-full blur-2xl" />
        <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),rgba(255,255,255,0.02)_38%,transparent_64%)]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-full bg-[conic-gradient(from_90deg,transparent,rgba(81,70,244,0.72),transparent,rgba(34,211,238,0.55),transparent)] opacity-60 blur-[1px]"
        />
        <div className="absolute inset-12 rounded-full bg-black" />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 rounded-full border border-dashed border-cyan-300/25"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 66, repeat: Infinity, ease: "linear" }}
          className="absolute inset-30 rounded-full border border-white/10"
        />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 700" aria-hidden="true">
          <defs>
            <linearGradient id="active-route" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#5146f4" />
              <stop offset="48%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <filter id="route-glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {nodes.map((node, index) => (
            <g key={node.label}>
              <motion.path
                d={node.route}
                fill="none"
                stroke="url(#active-route)"
                strokeWidth={active === index ? 3 : 1.2}
                strokeLinecap="round"
                filter={active === index ? "url(#route-glow)" : undefined}
                initial={false}
                animate={{ opacity: active === index ? 0.95 : 0.2, pathLength: active === index ? [0.12, 1, 0.9] : 1 }}
                transition={{ duration: active === index ? 1.2 : 0.25, ease: "easeOut" }}
              />
              <motion.circle
                r={active === index ? 6 : 3.5}
                fill={node.color}
                animate={{ cx: [350, node.x, 350], cy: [338, node.y, 338], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.025, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid h-[318px] w-[318px] place-items-center rounded-full border border-white/15 bg-black/70 shadow-[0_0_120px_rgba(81,70,244,0.36)] backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(34,211,238,0.35),transparent,rgba(81,70,244,0.5),transparent)]"
            />
            <div className="absolute inset-6 rounded-full bg-black" />
            <div className="absolute inset-14 rounded-full bg-[#5146f4]/25 blur-2xl" />

            <div className="relative w-full px-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.44em] text-cyan-200/70">Vynho engine</p>
              <motion.p
                key={activeNode.label}
                initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.34 }}
                className="mt-4 text-6xl font-black tracking-[-0.09em] text-white"
              >
                {activeNode.label}
              </motion.p>
              <motion.p
                key={activeNode.detail}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.04 }}
                className="mt-4 text-base font-medium text-zinc-300"
              >
                {activeNode.detail}
              </motion.p>

              <div className="mt-7 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                {metrics.map((metric, index) => (
                  <motion.span
                    key={metric}
                    animate={{ opacity: active === index ? 1 : 0.55, y: active === index ? -2 : 0 }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-2"
                  >
                    {metric}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {nodes.map((node, index) => {
          const isActive = active === index;

          return (
            <motion.button
              key={node.label}
              type="button"
              onMouseEnter={() => {
                setIsInteracting(true);
                setActive(index);
              }}
              onFocus={() => setActive(index)}
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={false}
              animate={{
                boxShadow: isActive ? `0 0 46px ${node.color}55` : "0 0 0 rgba(0,0,0,0)",
                borderColor: isActive ? `${node.color}cc` : "rgba(255,255,255,0.12)",
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-black/80 px-5 py-4 text-left text-white backdrop-blur-xl transition hover:bg-white/[0.08]"
              style={{ left: `${(node.x / 700) * 100}%`, top: `${(node.y / 700) * 100}%` }}
              aria-label={`Highlight ${node.label}`}
            >
              <span className="flex items-center gap-3">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <motion.span
                    animate={{ scale: isActive ? [1, 2.5, 1] : 1, opacity: isActive ? [0.9, 0, 0.9] : 0.45 }}
                    transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                    className="absolute h-4 w-4 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                  <span className="relative h-2.5 w-2.5 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 22px ${node.color}` }} />
                </span>
                <span>
                  <span className="block text-base font-bold tracking-[-0.03em]">{node.label}</span>
                  <span className="mt-1 block text-xs font-medium text-zinc-500">{node.detail}</span>
                </span>
              </span>
            </motion.button>
          );
        })}

        
      </motion.div>
    </motion.div>
  );
}