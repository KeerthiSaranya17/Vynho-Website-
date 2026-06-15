
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/sections/ContactForm";

const Contact = () => {
  
  return (
    <>
      <Helmet>
        <title>Contact Vynho</title>
        <meta
          name="description"
          content="Get in touch with Vynho for software development, AI consulting, and SaaS solutions."
        />
      </Helmet>
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
                <div
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-primary-500" />
                  <span className="text-text-secondary">
                    hello.vynho@gmail.com
                  </span>
                </div>

                <div
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300"
                >
                  <Phone className="h-5 w-5 text-primary-500" />
                  <span className="text-text-secondary">+91 98765 43210</span>
                </div>

                <div
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-4 hover:border-primary-500/30 hover:bg-white/3
hover:-translate-y-1
transition-all duration-300"
                >
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span className="text-text-secondary">India</span>
                </div>
              </div>
            </div>

            {/* right section */}
            <div>
              <ContactForm/>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
