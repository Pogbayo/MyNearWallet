import { useNavigate } from "react-router-dom";
import styles from "./join.module.css";
export const Join = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/coin");
  };
  return (
    <div className={styles.container}>
      <section className={styles.joinImageDiv}>
        <img src="media/ring/CTA-image-p-800.png" alt="" />
      </section>
      <h1>Join the NEAR Ecosystem</h1>
      <p>
        A simple, secure and scalable blockchain technology where you can invent
        and explore new experiences
      </p>
      <button className={styles.batin} onClick={handleNavigation}>
        Create Account
      </button>
    </div>
  );
};
