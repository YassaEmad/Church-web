import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Hero from "../components/Hero";
import SectionPrev from "../components/SectionPrev";
import MassCard from "../components/UI/MassCard";
import NewsCard from "../components/UI/NewsCard";
import { useData } from "../contexts/DataContext";
import ImgCard from "../components/UI/ImgCard";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function Home() {
  const navigate = useNavigate();
  const data = useData();
  const { news = [], mass = [], gallery = [] } = data || {};
  const latestNews = useMemo(() => news.slice(0, 3), [news]);
  const latestMasses = useMemo(() => mass.slice(0, 3), [mass]);
  const latestGallery = useMemo(() => gallery.slice(0, 4), [gallery]);
  if (!data) return <Loading />;

  return (
    <div className="mb-32">
      <Helmet>
        <title>كنيسة مار جرجس </title>
        <meta
          name="description"
          content="مرحبًا بكم في كنيسة مار جرجس بالكابلات. تابعوا آخر الأخبار، القداسات، وأنشطة الكنيسة."
        />
      </Helmet>
      <Hero />
      <div className="mt-16 flex flex-col gap-12">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={fadeUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <SectionPrev
              title={"اخر الاخبار"}
              onClick={() => navigate("/news")}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
              {latestNews.map((item) => (
                <NewsCard
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  disc={item.description}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={fadeUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <SectionPrev
              title={"القداسات"}
              onClick={() => navigate("/masses")}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
              {latestMasses.map((item) => (
                <MassCard
                  key={item.id}
                  time={item.time}
                  title={item.title}
                  disc={item.description}
                  location={item.location}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={fadeUp}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <SectionPrev
              title={"المعرض"}
              onClick={() => navigate("/gallery")}
            />
            <div className="mb-32 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {latestGallery.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.8 }}
                  key={item.id}
                >
                  <ImgCard text={item.title} alt={item.title} src={item.url} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Home;
