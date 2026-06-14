import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import SocialButton from "../ui/SocialIcons";
import footerLinks from "../../data/footerLinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <hr className="border-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* logo & taglie */}

        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary font-heading">
            VYNHO
          </h1>
          <p className="max-w-xs  text-sm leading-relaxed text-text-muted font-body">
            Build. Innovate. Scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] items-start gap-6">

          {/* left content */}

          <div className="flex  flex-col gap-5">

            {/* Address */}

            <div>
              <p className="text-text-secondary leading-6">
                5th Floor, Orion Business Tower <br />
                Madhapur Main Road HITEC City
                <br />
                Hyderabad,Telangana 500081 india
                <br />
              </p>
            </div>

            {/* Social links */}


            <div className="flex gap-3">
              <SocialButton
                href="https://x.com"
                icon={<FaXTwitter className="h-4 w-4 text-white" />}
              />
              <SocialButton
                href="https://x.com"
                icon={<FaGithub className="h-4 w-4 text-white" />}
              />
              <SocialButton
                href="https://x.com"
                icon={<FaInstagram className="h-4 w-4 text-white" />}
              />
              <SocialButton
                href="https://x.com"
                icon={<FaLinkedin className="h-4 w-4 text-white" />}
              />
            </div>

            {/* badge */}

            <div
              className="w-fit rounded-full border border-border/15 transition-all
                "
            >
              <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-1">
                <div className="h-2 w-2 rounded-full bg-[#198754] shadow-[0_0_15px_rgba(25,135,84,1)] animate-pulse" />

                <p className="text-sm font-body text-text-secondary">
                  All systems operational
                </p>
              </div>
            </div>
          </div>

          {/* right content */}

          <div>
            <div className="grid grid-cols-4 gap-30">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="mb-6 text-text-secondary capitalize">
                    {title}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {links.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className="text-text-muted transition-colors hover:text-white"
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10">
          <hr className="border-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* footer bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-text-muted md:flex-row">
          <p>© 2026 VYNHO Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <NavLink
              to="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </NavLink>

            <NavLink to="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
