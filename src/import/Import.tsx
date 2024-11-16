import styles from "./import.module.css";
import { boxData } from "../../data";
import { useNavigate } from "react-router-dom";
export const Import = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/form");
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Import Account</h1>
        <p className={styles.pTag}>
          If you’ve set up one or more account recovery methods, follow the
          instructions below to import your account.
        </p>
        <div className={styles.boxGrid}>
          {boxData.map((item, index) => (
            <div key={index} className={styles.box}>
              <item.icon className={styles.icon} />
              <h2>{item.issueHeader}</h2>
              <p>{item.issueText}</p>
              <button onClick={handleNavigation}>{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
