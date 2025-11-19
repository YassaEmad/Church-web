import { useState } from "react";
import styles from "./SwitchBar.module.css";

const tabData = [
  { key: "gallery", label: "المعرض" },
  { key: "mass", label: "القداسات" },
  { key: "news", label: "الاخبار" },
];
function SwitchBar({ activeTab, setActiveTab }) {
  return (
    <div className={styles.tabs_container}>
      {tabData.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tab_button} ${
            activeTab === tab.key ? styles.active : ""
          }`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default SwitchBar;
