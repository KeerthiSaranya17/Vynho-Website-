import { motion } from "framer-motion";

const pillars = [
  {
    title: "Craftsmanship",
    desc: "We obsess over the details — from pixel-perfect UIs to clean, maintainable code.",
  },
  {
    title: "Curiosity",
    desc: "We stay at the edge of AI, cloud, and product design, forever learning.",
  },
  {
    title: "Customer obsession",
    desc: "Every decision starts with the user and the business outcome we're driving.",
  },
  {
    title: "Collaboration",
    desc: "We work as one team — designers, engineers, and strategists in sync.",
  },
];

export default function Culture() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right: visual / pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${
                  i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-8"
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                  <span className="text-white font-bold">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Left: text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-fit mb-4 rounded-full border border-border/15 transition-all">
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-[#ff00aa] shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />
                <p className="text-sm font-body text-text-secondary">
                  Our culture
                </p>
            </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tight text-text-primary font-body leading-tight"
            >
              Built on{" "}
              <span className="text-gradient">principles</span>,
              driven by{" "}
              <span className="text-gradient">people</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-text-muted leading-relaxed"
            >
              Great products are born from great culture. At Vynho, we
              believe in transparency, ownership, and a deep respect for
              craft. We're a distributed team of engineers, designers, and
              strategists united by a love for building things that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["from-violet-400 to-indigo-500", "from-fuchsia-400 to-purple-500", "from-indigo-400 to-blue-500", "from-pink-400 to-rose-500"].map((c, i) => (
                  <div key={i} className={`h-10 w-10 rounded-full bg-gradient-to-br ${c} border-2 border-[#0a0a0f]`} />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-white">40+ team members</div>
                <div className="text-xs text-gray-400">Engineers, designers, strategists</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
