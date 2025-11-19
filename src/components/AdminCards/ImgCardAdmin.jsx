import styles from "./ImgCardAdmin.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Trash2 } from "lucide-react";

function ImgCardAdmin({ src, alt, text, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.cardWrapper}>
      <motion.div
        className={styles.imgCon}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
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
      </motion.div>
      <div className={styles.textcontainer}>
        <h3>{text}</h3>
        <Trash2 size={35} className={styles.trash} onClick={onDelete} />
      </div>
    </div>
  );
}

export default ImgCardAdmin;
