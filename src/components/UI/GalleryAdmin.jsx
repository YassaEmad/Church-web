import { useEffect, useMemo, useState } from "react";
import AddImg from "../AdminCards/AddImg";
import NewsCardAd from "../AdminCards/NewsCardAd";
import AdminPanal from "./Adminpanal";
import { useData } from "../../contexts/DataContext";
import Loading from "../Loading";
import ImgCardAdmin from "../AdminCards/ImgCardAdmin";
import { div } from "motion/react-client";

function GalleryAdmin() {
  const [showAdd, setShowAdd] = useState(false);

  const data = useData();
  const { gallery = [], deleteItem } = data || {};
  const latestGallery = useMemo(() => gallery, [gallery]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setShowAdd(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm(" متأكد من حذف  الصورة؟")) {
      const result = await deleteItem("gallery", id);
      alert(result.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <AdminPanal onAdd={() => setShowAdd(true)} title="المعرض">
      <div>
        {showAdd && <AddImg onBack={() => setShowAdd(false)} />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {latestGallery.map((item) => (
            <ImgCardAdmin
              key={item.id}
              text={item.title}
              src={item.url}
              alt={item.title}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      </div>
    </AdminPanal>
  );
}

export default GalleryAdmin;
