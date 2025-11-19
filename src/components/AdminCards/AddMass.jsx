import styles from "./AddMass.module.css";
import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";

function AddMass({ onBack }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
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
    const result = await addItem("mass", formData);
    alert(result.message);

    if (result.success) {
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
      });
      if (onBack) onBack();
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
    if (onBack) onBack();
  };

  return (
    <div className={styles.overlayContaier}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <h2>إضافة قداس جديد</h2>
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
              <label htmlFor="time">الوقت</label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>

            <div className={styles.halfGroup}>
              <label htmlFor="date">التاريخ</label>
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
            <label htmlFor="location">المكان</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">الوصف</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.textareaFieldGolden}
              rows="4"
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

export default AddMass;
