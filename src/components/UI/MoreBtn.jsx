import Styles from "./MoreBtn.module.css";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function MoreBtn({ word, onClick }) {
  return (
    <AnimatePresence>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button className={Styles.more} onClick={onClick}>
          {word}
          <ArrowLeft size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default MoreBtn;
