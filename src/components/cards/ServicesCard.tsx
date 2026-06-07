import { services } from "../../data/services";

const ServicesCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-4 mb-4 px-6">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-white/3
                  p-6
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-primary-500/30
                  hover:bg-white/5
                "
              >
                <div
                  className="
                    mb-6
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-primary-500/10
                    text-primary-500
                  "
                >
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
  )
}

export default ServicesCard