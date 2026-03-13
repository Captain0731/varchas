import { motion } from "framer-motion";
import styles from "./PremiumLoader.module.scss";
import logoSrc from "../../assets/images/logo.png";

const PremiumLoader = () => {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.loaderWrap}>
        <div className={styles.loaderCore}>
          <motion.div
            className={styles.outerRing}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className={styles.midRing}
            animate={{ rotate: -360 }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className={styles.orbitTrack}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          >
            <span className={styles.orbitDot} />
          </motion.div>

          <motion.div
            className={styles.centerBadge}
            animate={{ scale: [0.96, 1.05, 0.96], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={logoSrc} alt="Varchas" className={styles.centerLogo} />
          </motion.div>
        </div>
        <motion.p
          className={styles.label}
          animate={{ opacity: [0.5, 1, 0.5], y: [0, -2, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          Welcome To Varchas ... 
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PremiumLoader;
