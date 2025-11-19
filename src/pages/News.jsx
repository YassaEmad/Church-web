import MoreBtn from "../components/UI/MoreBtn";
import NewsCard from "../components/UI/NewsCard";
import styles from "./News.module.css";
import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
function News() {
  const navigate = useNavigate();
  const data = useData();
  const { news = [] } = data || {};
  const latestNews = useMemo(() => news, [news]);
  if (!data) return <Loading />;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <MoreBtn word="العوده للصفحه الرئيسيه" onClick={() => navigate("/")} />
        <h1>أخبار الكنيسة</h1>
        <p>ابق على اطلاع بآخر الأخبار والإعلانات من مجتمع كنيستنا.</p>
        <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {latestNews.map((item) => {
            return (
              <NewsCard
                key={item.id}
                date={item.date}
                title={item.title}
                disc={item.description}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default News;
