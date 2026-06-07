import ServicesCard from "../cards/ServicesCard";


const ServicesSection = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          {/* Badge */}
          <div
              className="w-fit mb-4 mx-auto rounded-full border border-border/15 transition-all
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

          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary">
            Solutions Designed for Modern Businesses
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-text-muted">
            From AI-powered applications to scalable cloud systems,
            we build technology that drives innovation and growth.
          </p>
        </div>

        {/* Cards */}
        <ServicesCard/>
        
      </div>
    </section>
  );
};

export default ServicesSection;