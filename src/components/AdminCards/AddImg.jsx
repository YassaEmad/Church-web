import styles from "./AddImg.module.css";
import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";

function AddImg({ onBack }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    url: "",
  });

  const { addItem } = useData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const result = await addItem("gallery", formData);
    alert(result.message);

    if (result.success) {
      setFormData({ title: "", date: "", url: "" });
      if (onBack) onBack();
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", date: "", url: "" });
    if (onBack) onBack();
  };

  return (
    <div className={styles.overlayContaier}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <h2>إضافة صورة جديدة</h2>
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

          <div className={styles.rowGroup}>
            <div className={styles.halfGroup}>
              <label
                htmlFor="date"
                className="text-[1.4rem] font-medium text-[#333]"
              >
                التاريخ
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="url">اللينك</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
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

export default AddImg;
