import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-23">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          {/* left content */}

          <div className="flex flex-col gap-13">
            {/* Badge */}

            <div
              className="w-fit rounded-full bg-linear-to-r from-cyan-400 via-violet-500 to-orange-500 p-px transition-all
                 duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.45)]"
            >
              <div className="flex items-center gap-3 rounded-full bg-black px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(79,70,229,0.8)] animate-pulse" />

                <p className="text-sm text-slate-300">
                  Now building with Claude and GPT-5.5
                </p>
              </div>
            </div>
            {/* main content */}

            <div className="grid gap-6">
              <h1 className="text-text-primary font-heading text-5xl leading-tight">
                Building Intelligent Solutions for a Smarter Tomorrow
              </h1>
              {/* sub content */}

              <p className="text-text-secondary font-body text-base leading-tight">
                We combine AI, software engineering, and modern design to create
                powerful digital experiences that drive business growth.
              </p>
            </div>
            {/* CTA buttons */}

            <div className="flex items-center gap-4">
              <button
                className="rounded-full px-6 py-3 bg-primary-600 text-slate-300 font-medium transition-all duration-300 hover:bg-primary-500
    hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 text-base"
              >
                <NavLink to="/contact">Get Started</NavLink>
              </button>

              <button
                className="rounded-full border border-white/10 bg-white/5 px-6  py-3  text-slate-300  font-medium  
                backdrop-blur-md  transition-all  duration-300  hover:border-white/30  hover:bg-white/10  hover:text-white "
              >
                Products
              </button>
            </div>
          </div>

          {/* right content */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
