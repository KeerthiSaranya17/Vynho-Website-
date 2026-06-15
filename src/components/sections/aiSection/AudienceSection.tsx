import { motion } from "framer-motion";
import { outcomes } from "../../../data/aiPage";
import { fadeUp, smoothEase } from "../../../lib/motion";
import { SectionReveal } from "./SectionReveal";

export function AudienceSection() {
  return (
    <SectionReveal className="relative border-y border-white/10 bg-white/2.5 py-26 max-w-7xl mx-auto px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(168,85,247,0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-5xl font-semibold tracking-tighter text-text-primary">
            Built for software teams, business teams, and founders.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
            Whether you need an AI feature inside an existing platform or a full SaaS product from zero, Vynho combines consulting clarity with product engineering.
          </p>
        </div>

        <div className="relative min-h-90 overflow-hidden border-l border-white/10 pl-8">
          <motion.div
            className="absolute left-8 top-0 h-full w-px origin-top bg-linear-to-b from-cyan-200 via-violet-300 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.1, ease: smoothEase }}
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-6"
          >
            {outcomes.map((outcome) => (
              <motion.div key={outcome} variants={fadeUp} className="relative pl-8">
                <span className="absolute left-0.75 top-2 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.9)]" />
                <p className="text-2xl font-medium tracking-[-0.04em] text-text-primary">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}