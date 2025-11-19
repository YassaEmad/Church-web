import MoreBtn from "../components/UI/MoreBtn";
import styles from "./Masses.module.css";
import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import MassCard from "../components/UI/MassCard";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Loading from "../components/Loading";
function Masses() {
  const navigate = useNavigate();
  const data = useData();
  const { mass = [] } = data || {};
  const latestMasses = useMemo(() => mass, [mass]);
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
        <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestMasses.map((item) => {
            return (
              <MassCard
                key={item.id}
                time={item.time}
                title={item.title}
                disc={item.description}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Masses;
