import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./TiltCard.module.scss";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const TiltCard = ({ children, className = "", onClick }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 190, damping: 16, mass: 0.5 });
  const springY = useSpring(rotateY, { stiffness: 190, damping: 16, mass: 0.5 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateYVal = ((x / rect.width) * 2 - 1) * 10;
    const rotateXVal = (((y / rect.height) * 2 - 1) * -1) * 10;

    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.tiltCard} ${className}`.trim()}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
