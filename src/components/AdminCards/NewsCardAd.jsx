import styles from "./NewsCardAd.module.css";
import { Trash2 } from "lucide-react";
function NewsCardAd({ onDelete, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.btns}>
        <button className={styles.trash} onClick={onDelete}>
          <Trash2 size={18} />
        </button>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default NewsCardAd;
