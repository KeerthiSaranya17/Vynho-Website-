import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-4xl border border-white/10 bg-white/3 p-16 text-center">
          <h2 className="text-5xl font-semibold text-white">
            Ready to Build the Future Together?
          </h2>

          <p className="mt-6 text-slate-400">
            Let's discuss your next project and create
            something extraordinary.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <NavLink
              to="/contact"
              className="rounded-xl bg-primary-600 px-6 py-4 text-white"
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/products"
              className="rounded-xl border border-white/10 px-6 py-4 text-white"
            >
              Explore Products
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;