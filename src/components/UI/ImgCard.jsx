import styles from "./ImgCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

function ImgCard({ src, alt, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.imgCon}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      <motion.img
        className={styles.Image}
        loading="lazy"
        src={src}
        alt={alt}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.p
        className={styles.imgText}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export default ImgCard;
