import MoreBtn from "../components/UI/MoreBtn";
import styles from "./News.module.css";
import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import ImgCardsec from "../components/UI/ImgCardsec";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Loading from "../components/Loading";
function Gallery() {
  const navigate = useNavigate();
  const data = useData();
  const { gallery = [] } = data || {};
  const latestGallery = useMemo(() => gallery, [gallery]);
  if (!data) return <Loading />;
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col gap-3"
      >
        <MoreBtn word="العوده للصفحه الرئيسيه" onClick={() => navigate("/")} />
        <h1>معرض الصور</h1>
        <p>لحظات مُلتقطة من مجتمع كنيستنا وفعالياتنا واحتفالاتنا.</p>
      </motion.div>
      <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {latestGallery.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.8 }}
            key={item.id}
          >
            <ImgCardsec
              text={item.title}
              alt={item.title}
              src={item.url}
              date={item.date}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
