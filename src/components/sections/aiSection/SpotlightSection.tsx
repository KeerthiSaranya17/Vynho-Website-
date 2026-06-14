import { motion } from "framer-motion";
import { consultingSpotlight, toolSpotlight } from "../../../data/aiPage";
import { smoothEase } from "../../../lib/motion";
import { AISpotlightConsole } from "./AISpotlightConsole";
import { SectionReveal } from "./SectionReveal";

export function SpotlightSection() {
  return (
    <SectionReveal id="spotlight" className="relative overflow-hidden py-20 max-w-7xl mx-auto px-6">
      <div />
      <motion.div
        className="absolute -right-24 top-20 h-80 w-80 rounded-full"
        animate={{ x: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl"
        animate={{ x: [0, 45, 0], y: [0, -25, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-200/75">AI Services Spotlight</p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-text-primary">
            Consulting clarity. AI tools that actually ship.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            This dedicated Vynho AI section helps visitors understand exactly what you can do for them: guide AI decisions, design the right system, and build tools that become part of their daily workflow.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <SpotlightList title="AI Consulting" items={consultingSpotlight} direction="left" />
            <SpotlightList title="AI Tools" items={toolSpotlight} direction="right" />
          </div>
        </div>

        <AISpotlightConsole />
      </div>
    </SectionReveal>
  );
}

function SpotlightList({ title, items, direction }: { title: string; items: string[]; direction: "left" | "right" }) {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">{title}</h3>
      <div className="mt-5 border-t border-white/10">
        {items.map((item) => (
          <motion.p
            key={item}
            className="border-b min-h-16.25 border-white/10 flex items-center py-2 text-sm leading-6 text-white/64"
            initial={{ opacity: 0, x: direction === "left" ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}