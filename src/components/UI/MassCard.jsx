import styles from "./MassCard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function MassCard({ title, time, location, disc, date }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={styles.newCardContainer}
    >
      <h3 className={styles.massTitle}>{title}</h3>
      <p className={styles.date}>{date}</p>
      <div className={styles.time}>
        <Clock size={16} color="#d4af37" />
        <p>{time}</p>
      </div>
      <div className={styles.location}>
        <MapPin size={16} color="#d4af37" />
        <p>{location}</p>
      </div>
      <div className={styles.massDesc}>{disc}</div>
    </motion.div>
  );
}

export default MassCard;
