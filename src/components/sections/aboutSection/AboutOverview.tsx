import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    desc: "To empower businesses worldwide with intelligent software and AI-driven solutions that unlock growth, efficiency, and lasting competitive advantage.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-indigo-500/20",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    title: "Our Vision",
    desc: "A world where every business — from India to the globe — has access to world-class technology that transforms how they operate, serve, and scale.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    title: "Our Values",
    desc: "Craftsmanship, curiosity, and customer obsession guide every line of code, every AI model, and every product we ship.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    gradient: "from-fuchsia-500/20 to-violet-500/20",
    border: "border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
  },
];

export default function Overview() {
  return (
    <section id="story" className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-fit mb-4 rounded-full border border-border/15 transition-all">
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-[#7F00FF] shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />
                <p className="text-sm font-body text-text-secondary">
                  Who we are?
                </p>
            </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tight font-body text-text-primary leading-tight"
            >
              A team of{" "}
              <span className="text-gradient">builders</span>,
              thinkers, and{" "}
              <span className="text-gradient">innovators</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-text-muted leading-relaxed"
            >
              Founded with a simple belief — great software transforms
              businesses. Vynho blends engineering excellence with AI
              innovation to deliver products that feel inevitable. From
              Bengaluru to the world, we partner with founders and
              enterprises to turn bold ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-3xl font-bold text-white">2019</div>
                <div className="mt-1 text-sm text-gray-400">Founded in India</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="mt-1 text-sm text-gray-400">Countries served</div>
              </div>
            </motion.div>
          </div>

          {/* Right: cards */}
          <div className="space-y-5">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-gradient-to-br ${c.gradient} p-8 backdrop-blur-sm hover:scale-[1.01] transition-transform`}
              >
                <div className="flex items-start gap-5">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-black/40 ${c.iconColor}`}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 text-gray-300 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
