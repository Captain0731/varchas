import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { scrollRevealVariant } from "./motionPresets";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  return (
    <motion.div
      className={className}
      variants={scrollRevealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
