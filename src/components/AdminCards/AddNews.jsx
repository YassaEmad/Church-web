import styles from "./AddNews.module.css";
import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";

function AddNews({ onBack }) {
  const { addItem } = useData();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const result = await addItem("news", formData);
    alert(result.message);
    if (result.success) {
      setFormData({ title: "", date: "", description: "", content: "" });
      if (onBack) onBack();
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", date: "", description: "", content: "" });
    if (onBack) onBack();
  };

  return (
    <div className={styles.overlayContaier}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <h2>إضافة جديد </h2>
          <button className={styles.closeBtn} onClick={handleCancel}>
            ×
          </button>
        </div>

        <div>
          <div className={styles.formGroup}>
            <label htmlFor="title">العنوان</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">التاريخ</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`${styles.inputField} ${styles.dateField}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">الوصف</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button onClick={handleSubmit} className={styles.saveBtn}>
              حفظ
            </button>
            <button onClick={handleCancel} className={styles.cancelBtn}>
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
