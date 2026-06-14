import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/motion";
import Button from "../../ui/button";
// import HeroImage from "../../../assets/images/vynho-ai-hero.jpg"

export function HeroSection() {
  // const { scrollYProgress } = useScroll();
  // const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  // const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.35]);

  return (
    <section id="top">
      <div className="max-w-7xl mx-auto px-6 lg:py-26 sm:py-22">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.25 },
              },
            }}
            
          >
            <motion.div
              variants={fadeUp}
              className="w-fit mx-auto rounded-full border border-border/15 transition-all mb-5
                "
            >
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />

                <p className="text-sm font-body text-text-secondary">AI</p>
              </div>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className=" text-5xl font-heading font-medium leading-tight text-text-primary"
            >
              AI services and consulting for companies ready to build, automate,
              and scale.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-base text-text-muted leading-relaxed font-body max-w-xl mx-auto"
            >
              Vynho helps Indian and global teams turn AI ideas into secure
              software, SaaS features, agents, and digital products that work in
              production.
            </motion.p>
            <motion.div
  variants={fadeUp}
  className="mt-9 flex justify-center flex-col items-center gap-3 sm:flex-row"
>
              <Button to="/contact" variant="primary">Discuss an AI project</Button>
              <a
                href="#spotlight"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-cyan-300/70 hover:bg-white/10"
              >
                View AI spotlight
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
