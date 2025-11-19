import { useEffect, useMemo, useState } from "react";
import AddNews from "../AdminCards/AddNews";
import NewsCardAd from "../AdminCards/NewsCardAd";
import AdminPanal from "./Adminpanal";
import { useData } from "../../contexts/DataContext";
import Loading from "../Loading";

function NewAdmin() {
  const [showAdd, setShowAdd] = useState(false);

  const data = useData();
  const { news = [], deleteItem } = data || {};
  const latestNews = useMemo(() => news, [news]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setShowAdd(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDelete = async (newsId) => {
    if (window.confirm(" متأكد من حذف الخبر؟")) {
      const result = await deleteItem("news", newsId);
      alert(result.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <AdminPanal onAdd={() => setShowAdd(true)} title="الاخبار">
      {showAdd && <AddNews onBack={() => setShowAdd(false)} />}
      {latestNews.map((newsItem) => (
        <NewsCardAd
          key={newsItem.id}
          title={newsItem.title}
          onDelete={() => handleDelete(newsItem.id)}
        />
      ))}
    </AdminPanal>
  );
}

export default NewAdmin;
