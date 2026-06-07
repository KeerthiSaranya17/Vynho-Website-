import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  to: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  children,
  to,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-500 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 active:scale-95",

    secondary:
      "border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md hover:border-white/30 hover:bg-white/10 hover:text-white",
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;