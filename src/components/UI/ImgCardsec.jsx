import styles from "./ImgCardsec.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar } from "lucide-react";

function ImgCard({ src, alt, text, date }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
        <div className="flex items-center gap-2">
          <Calendar size={16} color="#6b7280" />
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}

export default ImgCard;
