import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-26">
        <div className="grid lg:grid-cols-[50%_50%] items-start gap-6">
          {/* left content */}

          <div className="space-y-6">
            {/* badge */}
            <div
              className="w-fit rounded-full border border-border/15 transition-all
                "
            >
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-[#198754] shadow-[0_0_15px_rgba(25,135,84,1)] animate-pulse" />

                <p className="text-sm font-body text-text-secondary">
                  Contact
                </p>
              </div>
            </div>


            <div>
              <h2 className="mb-4 text-5xl font-semibold text-text-primary font-heading">
                Have a project in mind?
              </h2>

              <p className="text-base text-text-muted leading-relaxed max-w-xl">
                Reach out through any of the channels below and we'll get back
                to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-text-secondary">
                  hello.vynho@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-text-secondary">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-text-secondary">India</span>
              </div>
            </div>
            
          </div>

          {/* right section */}
          <div >
            <div className="rounded-3xl border border-white/10 bg-white/0.03 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.10)] hover:border-primary-500/30">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-text-secondary">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">
                    Project Type
                  </label>

                  <input
                    type="text"
                    placeholder="Web App, AI Solution, SaaS Platform..."
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">
                    Message
                  </label>

                  <textarea
                    rows={2}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-linear-to-r from-indigo-500 to-violet-600
hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
              <div className="absolute right-0 top-1/2 -z-10 h-125 w-125 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[140px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
