import { useEffect, useState } from "react";
import { Menu, X, Church, Lock } from "lucide-react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import Button from "./UI/Button";
import Overlay from "./UI/Overlay";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOverlayOpen(false);
      }
    }

    if (isOverlayOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  const navLinks = useMemo(() => {
    return [
      { name: "الرئيسية", path: "/" },
      { name: "الأخبار", path: "/news" },
      { name: "القداسات", path: "/masses" },
      { name: "المعرض ", path: "/gallery" },
    ];
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className={styles.navbarContainer}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <button
                  aria-label="logo-button"
                  onClick={() => setIsOverlayOpen(true)}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Church size={24} color="white" />
                  </motion.div>
                </button>
              </div>
              <div className="logodisc">
                <p className={styles.logoname}>كنيسة مارجرجس</p>
                <p className={styles.logoloc}>الكابلات</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className={styles.linksContainer}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button to={link.path}>{link.name}</Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="menu-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobileLinks}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button to={link.path}>{link.name}</Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOverlayOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Overlay onClose={() => setIsOverlayOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
