import styles from "./Overlay.module.css";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Overlay({ onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(password)) {
      navigate("/admin");
      onClose();
    } else {
      setError("كلمة المرور غير صحيحة");
      setPassword("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className={styles.overlayContaier}>
      <div className={styles.modal}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Lock size={24} color="white" />
          </div>
        </div>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Admin Access</h2>
          <p className={styles.modalText}>
            restricted to authorized personnel only. Please enter the password
          </p>
        </div>
        <div className={styles.login}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyPress={handleKeyPress}
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttonContainer}>
            <button
              className={styles.btnLogin}
              onClick={handleLogin}
              aria-label="login-button"
            >
              Login
            </button>
            <button
              className={styles.btnClose}
              onClick={onClose}
              aria-label="close-button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
