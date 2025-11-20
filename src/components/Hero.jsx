import styles from "./Hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContainer}>
          <img
            className={styles.heroImage}
            src="https://res.cloudinary.com/dsibauwzo/image/upload/f_auto,q_auto/v1763564987/WhatsApp_Image_2025-11-19_at_17.06.13_08f33c36_uk7w6k.jpg"
            alt="St. George Church"
            fetchpriority="high"
            decoding="sync"
            loading="eager"
          />

          <div className={styles.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              كنيسة مار جرجس - الكابلات
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              كنيسة بتجمعنا في الإيمان والمحبة، ونرحّب بالجميع في الصلوات
              والخدمة وأنشطة الكنيسة.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={styles.badge}
            >
              قداس الجمعه: 8:00 صباحاً
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
