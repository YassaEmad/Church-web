import { useState } from "react";
import styles from "./NewsCard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronUp, ChevronDown } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function NewsCard({ date, title, disc }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const shouldShowButton = disc.length > maxLength;
  const displayText =
    isExpanded || !shouldShowButton ? disc : disc.slice(0, maxLength) + "...";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={styles.newCardContainer}
    >
      <div className={styles.calander}>
        <Calendar size={16} />
        <p>{date}</p>
      </div>
      <h3 className={styles.newsTitle}>{title}</h3>
      <div className={styles.newsDesc}>{displayText}</div>
      {shouldShowButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.expandButton}
        >
          {isExpanded ? (
            <>
              عرض أقل <ChevronUp size={16} />
            </>
          ) : (
            <>
              عرض المزيد <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </motion.div>
  );
}

export default NewsCard;
