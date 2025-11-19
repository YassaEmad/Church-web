import styles from "./SectionPrev.module.css";
import MoreBtn from "./UI/MoreBtn";
import { motion } from "framer-motion";
function SectionPrev({ title, onClick }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={styles.sectionPrev}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
        <MoreBtn word="المزيد" onClick={onClick} />
      </div>
      <div></div>
    </motion.section>
  );
}

export default SectionPrev;
