import type { Technology } from "../../data/technologies";

interface Props {
  technology: Technology;
}

const TechnologyCard = ({ technology }: Props) => {
  const Icon = technology.icon;

  return (
    <article
      className={[
        "group relative flex items-center gap-4",
        "h-24 w-55",
        "rounded-2xl border border-white/10",
        "bg-white/4 px-5",
        "backdrop-blur-md",
        "transition-all duration-500",
        "hover:-translate-y-1",
        "hover:border-white/20",
        "hover:bg-white/[0.07]",
        "hover:shadow-xl",
        technology.glow,
      ].join(" ")}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">
          {technology.name}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
          {technology.category}
        </p>
      </div>
    </article>
  );
};

export default TechnologyCard;