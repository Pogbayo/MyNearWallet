import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/coin");
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>NEAR is here</h1>
        <p className={styles.subtitle}>
          Safe & easy for you to store, buy, send, and stake NEAR assets
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.createAccountButton}
          onClick={handleNavigation}
        >
          Create Account
        </button>
        <button
          className={styles.importAccountButton}
          onClick={handleNavigation}
        >
          Import Account
        </button>
      </div>

      <img
        src="/media/cardImages/Screen-p-1600.png"
        alt="NEAR asset"
        className={styles.largeImage}
      />
    </div>
  );
};
