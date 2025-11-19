import styles from "./AdminPanal.module.css";
function AdminPanal({ children, onAdd, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onAdd} className={styles.add}>
          اضافه +
        </button>
        <div className={styles.content}>
          <h3>ادارة {title}</h3>
          <p>حذف او اضافه {title}</p>
        </div>
      </div>
      <div className={styles.cards}>{children}</div>
    </div>
  );
}

export default AdminPanal;
