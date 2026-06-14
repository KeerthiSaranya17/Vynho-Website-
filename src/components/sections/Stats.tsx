const stats = [
  {
    value: "10+",
    label: "Products & Solutions",
    description: "AI, SaaS, and custom software delivered",
  },
  {
    value: "AI + SaaS",
    label: "Core Expertise",
    description: "Modern software powered by AI",
  },
  {
    value: "India & Global",
    label: "Reach",
    description: "Serving businesses across markets",
  },
  {
    value: "End-to-End",
    label: "Delivery",
    description: "Strategy, design, development, and launch",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 sm:py-6 lg:py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm text-text-secondary">
              Trust & Impact
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-text-primary sm:text-base lg:text-lg">
            Building products that create real business value
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-text-muted">
            Combining AI, SaaS, and engineering excellence to help
            businesses launch, automate, and scale faster.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          
          <div className="grid md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative p-10 ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
                </div>

                <div className="relative">
                  <h3 className="text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-text-primary">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}