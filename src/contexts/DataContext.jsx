import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const DataContext = createContext(null);

function DataProvider({ children }) {
  const [data, setData] = useState({
    news: [],
    mass: [],
    gallery: [],
  });

  const getData = async () => {
    try {
      const newsSnap = await getDocs(collection(db, "news"));
      const massSnap = await getDocs(collection(db, "mass"));
      const gallerySnap = await getDocs(collection(db, "gallery"));

      setData({
        news: newsSnap.docs.map((d) => ({ id: d.id, ...d.data() })),
        mass: massSnap.docs.map((d) => ({ id: d.id, ...d.data() })),
        gallery: gallerySnap.docs.map((d) => ({ id: d.id, ...d.data() })),
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      await getData();
      return { success: true, message: "تم الحذف بنجاح" };
    } catch (error) {
      console.error("Delete error:", error);
      return { success: false, message: "حدث خطأ أثناء الحذف" };
    }
  };

  const addItem = async (collectionName, itemData) => {
    try {
      await addDoc(collection(db, collectionName), itemData);
      await getData();
      return { success: true, message: "تمت الإضافة بنجاح" };
    } catch (error) {
      console.error("Add error:", error);
      return { success: false, message: "حدث خطأ أثناء الإضافة" };
    }
  };

  const value = {
    ...data,
    deleteItem,
    addItem,
    refreshData: getData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export { useData, DataProvider };
