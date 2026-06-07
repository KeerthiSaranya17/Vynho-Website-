import { technologies } from "../../data/technologies";
import TechnologyCard from "../cards/TechnologyCard";

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4 lg:gap-5 lg:pr-5"
      aria-hidden={hidden}
    >
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.name}
          technology={technology}
        />
      ))}
    </div>
  );
}

const MarqueeLogoStrip = () => {
  return (
    <section
      aria-labelledby="trusted-teams-title"
      className="relative isolate overflow-hidden sm:py-6 lg:py-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(79,70,229,0.18),transparent_38%),radial-gradient(circle_at_85%_60%,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(79,70,229,0.08),transparent_32%)]" />

      {/* Top Blur Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-linear-to-br from-[#4F46E5]/20 to-[#0EA5E9]/20 blur-[120px]" />

      {/* Section Heading */}
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">

        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="mr-2 h-2 w-2 rounded-full bg-linear-to-r from-[#4F46E5] to-[#0EA5E9] animate-pulse" />

          <span className="text-sm text-text-secondary">
            Technology Stack
          </span>
        </div>

        <h2
          id="trusted-teams-title"
          className="mt-8 text-lg font-bold tracking-tight text-text-primary sm:text-base lg:text-lg"
        >
         Building Tomorrow with Today's Best Tools

          {/* <span className="block bg-gradient-to-br from-[#4F46E5] to-[#0EA5E9] bg-clip-text text-transparent">
            Technology Stack
          </span> */}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-text-muted">
          We leverage AI, cloud infrastructure, and modern development
technologies to build scalable, intelligent, and future-ready
software solutions.
        </p>

      </div>

      {/* Marquee */}
      <div
        className="marquee-mask group relative overflow-hidden py-1"
        role="region"
        aria-label="Technology partners"
      >
        <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">

          <LogoGroup />

          <LogoGroup hidden />

        </div>
      </div>
    </section>
  );
};

export default MarqueeLogoStrip;