import type { ReactNode } from "react";

type SocialButtonProps = {
  icon: ReactNode;
  href: string;
};

const SocialButton = ({ icon, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-linear-to-br from-zinc-1000 to-zinc-800
        transition-all duration-200 hover:scale-105hover:bg-white/15">
      {icon}
    </a>
  );
};

export default SocialButton;
