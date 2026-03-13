import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransitionVariants } from "./motionPresets";
import styles from "./PageTransition.module.scss";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.main
      className={styles.pageTransition}
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
