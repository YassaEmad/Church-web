import MoreBtn from "../components/UI/MoreBtn";
import NewsCard from "../components/UI/NewsCard";
import styles from "./News.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
import SwitchBar from "../components/SwitchBar";
// import AdminPanal from "../components/UI/Adminpanal";
import NewAdmin from "../components/UI/NewAdmin";
import MassAdmin from "../components/UI/MassAdmin";
import GalleryAdmin from "../components/UI/GalleryAdmin";

function Admin() {
  const [activeTab, setActiveTab] = useState("news");
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <MoreBtn word="العوده للصفحه الرئيسيه" onClick={() => navigate("/")} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>لوحة تحكم </h1>
          <p>إدارة محتوى الكنيسة والأخبار والقداسات والصور</p>
        </motion.div>
        <SwitchBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab == "news" && <NewAdmin />}
        {activeTab == "mass" && <MassAdmin />}
        {activeTab == "gallery" && <GalleryAdmin />}
      </div>
    </motion.div>
  );
}

export default Admin;
