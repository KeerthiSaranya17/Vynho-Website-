import ServicesCard from "../cards/ServicesCard";
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="w-full">
       <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:py-26 sm:py-22">
        
        <div className="text-center">
          {/* Badge */}
          <div
              className="w-fit mb-5 mx-auto rounded-full border border-border/15 transition-all
                "
            >
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />

                <p className="text-sm font-body text-text-secondary">
                  Services
                </p>
              </div>
            </div>
          
          {/* Heading */}

          <h2 className="text-5xl font-semibold text-text-primary font-heading leading-tight">
            Solutions Designed for Modern Businesses
          </h2>

          <p className="mt-8 text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            From AI-powered applications to scalable cloud systems,
            we build technology that drives innovation and growth.
          </p>
        </div>

        {/* Cards */}
        <ServicesCard/>
        
      </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;