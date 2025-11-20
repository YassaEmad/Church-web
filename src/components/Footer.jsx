import styles from "./Footer.module.css";
import { Church, MapPin, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
function Footer() {
  return (
    <>
      <div className="mt-20 grid grid-cols-1 place-items-center gap-8 bg-primary px-4 py-12 text-white md:grid-cols-3 md:px-6 lg:px-8">
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Church size={24} color="white" />
            </motion.div>
          </div>
          <div className="logodisc">
            <p className={styles.logoname}>كنيسة مارجرجس</p>
            <p className={styles.logoloc}>الكابلات</p>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <MapPin size={24} color="white" />
          شارع الكابلات امام شركه الفورمايكا
        </div>
        <div className={styles.contacts}>
          <p>تواصل معانا</p>
          <div className="flex items-center justify-center gap-3">
            <a href="" className={styles.icon} aria-label="facebook-link">
              <Facebook size={24} />
            </a>
            <a className={styles.icon} href="" aria-label="phone-link">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
        <div className="col-span-full w-full border-t border-white/100 pt-8 text-center text-[1.4rem] md:col-span-3">
          <p>© 2025 St. George Church - El Kabelat. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
