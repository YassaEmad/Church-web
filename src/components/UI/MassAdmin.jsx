import { useEffect, useMemo, useState } from "react";
import AddMass from "../AdminCards/AddMass";
import NewsCardAd from "../AdminCards/NewsCardAd";
import AdminPanal from "./Adminpanal";
import { useData } from "../../contexts/DataContext";
import Loading from "../Loading";

function MassAdmin() {
  const [showAdd, setShowAdd] = useState(false);

  const data = useData();
  const { mass = [], deleteItem } = data || {};
  const latestMass = useMemo(() => mass, [mass]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setShowAdd(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDelete = async (massId) => {
    if (window.confirm("هل أنت متأكد من حذف هذا القداس؟")) {
      const result = await deleteItem("mass", massId);
      alert(result.message);
    }
  };

  if (!data) return <Loading />;

  return (
    <AdminPanal onAdd={() => setShowAdd(true)} title="القداسات">
      {showAdd && <AddMass onBack={() => setShowAdd(false)} />}

      {latestMass.map((massItem) => (
        <NewsCardAd
          key={massItem.id}
          title={massItem.title}
          onDelete={() => handleDelete(massItem.id)}
        />
      ))}
    </AdminPanal>
  );
}

export default MassAdmin;
