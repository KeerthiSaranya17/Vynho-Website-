import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import testimonials from "../../data/testimonialData";



const wrapIndex = (index: number) => (index + testimonials.length) % testimonials.length;

export default function Testimonials() {
  const [active, setActive] = useState(3);

  const goNext = () => setActive((current) => wrapIndex(current + 1));
  const goPrev = () => setActive((current) => wrapIndex(current - 1));

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-26 sm:px-10 lg:px-18">
      <div className="mx-auto max-w-7xl px-6">
      <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(81,70,244,0.22),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.06),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="mr-2 h-2 w-2 rounded-full bg-linear-to-r from-[#f59e0b] to-[#e9710e] animate-pulse" />

          <span className="text-sm text-text-secondary">
            Our Customers
          </span>
        </div>
          {/* <h2 className="mt-5 text-4xl font-bold tracking-[-0.055em] text-white sm:text-6xl">
            Our success stories
          </h2> */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-muted">
            Real teams share how Vynho Pvt. Ltd. helped them ship custom software, SaaS products, AI solutions, and digital products for India and global markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-12 flex max-w-4xl items-center justify-center gap-3 sm:gap-5"
        >
          {testimonials.map((client, index) => {
            const selected = active === index;

            return (
              <motion.button
                key={client.name}
                type="button"
                onClick={() => setActive(index)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                animate={{ opacity: selected ? 1 : 0.45, scale: selected ? 1.14 : 1 }}
                className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${client.gradient} text-sm font-black text-white ring-offset-4 ring-offset-black transition sm:h-16 sm:w-16 ${selected ? "ring-2 ring-[#f59e0b]" : "ring-1 ring-white/10"}`}
                aria-label={`Show testimonial from ${client.name}`}
              >
                {client.avatar}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="relative mx-auto mt-12 h-[450px] max-w-7xl">
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-black to-transparent" /> */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-black to-transparent" /> */}

          {[-1, 0, 1].map((offset) => {
            const client = testimonials[wrapIndex(active + offset)];
            const isCenter = offset === 0;

            return (
              <motion.article
                key={`${client.name}-${offset}`}
                initial={{ opacity: 0, x: offset * 180, scale: 0.88 }}
                animate={{
                  opacity: isCenter ? 1 : 0.34,
                  x: offset * 320,
                  scale: isCenter ? 1 : 0.9,
                  filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`absolute left-1/2 top-0 h-full w-full max-w-[520px] -translate-x-1/2 overflow-hidden rounded-[1.7rem] border bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] backdrop-blur-xl ${isCenter ? "z-10 border-[#f59e0b]/60 shadow-[0_0_80px_rgba(245,158,11,0.12)]" : "border-white/10"}`}
              >
                

                <div className="relative grid h-full md:grid-cols-[0.42fr_0.58fr]">
                  <div className="flex flex-col justify-between border-b border-white/10 p-6 md:border-b-0 md:border-r">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-body font-semibold text-zinc-400">
                        <Sparkles className="h-4 w-4 text-[#f59e0b]" />
                        Business types
                      </div>

                      <div className="mt-24 hidden flex-wrap gap-2 md:flex">
                        {client.tags.map((tag) => (
                          <span key={tag} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-zinc-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden text-xs text-zinc-600 md:block font-body">Vynho Pvt. Ltd. | India and Global</div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className={`grid h-13 w-13 place-items-center rounded-full bg-gradient-to-br ${client.gradient} text-sm font-black text-text-primary font-body`}>
                        {client.avatar}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text-muted">{client.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          {client.role}, {client.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-14 flex items-center gap-2 text-[#f59e0b]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-5 w-5 fill-current" />
                      ))}
                      <span className="ml-1 text-sm font-semibold text-zinc-200">5.0</span>
                    </div>

                    <p className="mt-5 text-lg font-semibold leading-8 tracking-[-0.035em] font-body text-text-primary sm:text-lg">
                      "{client.quote}"
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2 md:hidden">
                      {client.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.button
            type="button"
            onClick={goPrev}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-zinc-300 backdrop-blur transition hover:border-white/20 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={goNext}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-zinc-300 backdrop-blur transition hover:border-white/20 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
      </div>
    </section>
  );
}