import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, smoothEase } from "../../../lib/motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionReveal({ children, className = "", id }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: smoothEase }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}