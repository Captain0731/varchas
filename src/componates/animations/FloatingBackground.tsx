import { motion } from "framer-motion";
import styles from "./FloatingBackground.module.scss";

const loop = {
  duration: 28,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

const FloatingBackground = () => {
  return (
    <div className={styles.background} aria-hidden>
      <motion.div
        className={`${styles.shape} ${styles.shapeOne}`}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], rotate: [0, 8, -4, 0], opacity: [0.16, 0.24, 0.18, 0.16] }}
        transition={{ ...loop, duration: 34 }}
      />
      <motion.div
        className={`${styles.shape} ${styles.shapeTwo}`}
        animate={{ x: [0, -30, 24, 0], y: [0, 20, -16, 0], rotate: [0, -6, 6, 0], opacity: [0.18, 0.25, 0.19, 0.18] }}
        transition={{ ...loop, duration: 40 }}
      />
      <motion.div
        className={`${styles.shape} ${styles.shapeThree}`}
        animate={{ x: [0, 16, -24, 0], y: [0, -26, 12, 0], rotate: [0, 4, -5, 0], opacity: [0.15, 0.22, 0.17, 0.15] }}
        transition={{ ...loop, duration: 24 }}
      />
    </div>
  );
};

export default FloatingBackground;
