import { motion } from "framer-motion";

const steps = ["Discover", "Design", "Build", "Launch", "Scale"];

export default function ProcessFlow() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} id="approach" className="  px-6 py-26">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[40%_60%] items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-fit mb-4 rounded-full border border-border/15 transition-all">
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-[#3ca1d3] shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />
                <p className="text-sm font-body text-text-secondary">
                  Who we work?
                </p>
            </div>
            </motion.div>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] font-body text-text-primary">
              Simple process. Serious engineering.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="max-w-3xl text-lg text-text-muted "
          >
            We keep the experience focused: understand the business, shape the product, build with reliable technology, and improve it with data, automation, and AI where it creates value.
          </motion.p>
        </div>

        <div className="relative mt-18 overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(110deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-10 right-10 top-1/2 hidden h-px origin-left bg-linear-to-r from-[#5146f4] via-cyan-300 to-transparent lg:block"
          />

          <div className="relative grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="flex min-h-36 flex-col justify-between rounded-[1.4rem] border border-white/10 bg-black/35 p-6 backdrop-blur"
              >
                <span className="text-sm text-zinc-500">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}