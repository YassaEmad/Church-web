import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </NavLink>
  );
}

export default Button;
