import { ArrowRight } from "lucide-react";
import AboutAnimation from "../../../assets/animations/AboutAnimation";
import Button from "../../ui/button";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl  mx-auto px-6 lg:py-26 sm:py-22 bg-[radial-gradient(circle_at_78%_30%,rgba(81,70,244,0.28),transparent_32%),radial-gradient(circle_at_18%_62%,rgba(0,198,255,0.12),transparent_28%)]">
        <div className="grid lg:grid-cols-2 items-start gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col">
              {/* Badge */}
              <div
                className="w-fit rounded-full border border-border/15 transition-all mb-5
                "
              >
                <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                  <div className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />

                  <p className="text-sm font-body text-text-secondary">About</p>
                </div>
              </div>

              <h1 className="text-text-primary font-bold font-heading text-5xl leading-tight">
                We're Engineers, Designers, and <br/> Builders. Creating with{" "}<br/>
                <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent font-bold font-heading text-5xl leading-tight ">
                  Software That Matters.
                </span>
              </h1>

              <p className="mt-8 text-base text-text-muted leading-relaxed font-body max-w-xl">
                At VYNHO, we are passionate about creating intelligent,
                scalable, and impactful digital solutions that help businesses
                grow.
              </p>

              <Button to="/services" variant="primary" className="mt-10 w-fit flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
          {/* Right */}
          <div>
            <AboutAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
