import { useState } from "react";
import styles from "./nav.module.css";

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logo} src="/media/logo/navLogo.png" />

        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <a href="#about" className={styles.navLinkItem}>
            AboutNear
          </a>
          <a href="#community" className={styles.navLinkItem}>
            Community
          </a>
          <a href="#help" className={styles.navLinkItem}>
            Help Center
          </a>
          <a href="#education" className={styles.navLinkItem}>
            Education
          </a>
          <a href="#ecosystem" className={styles.navLinkItem}>
            NEAR Ecosystem
          </a>
        </nav>

        <button className={styles.launchAppButton}>Launch App</button>

        <button className={styles.hamburgerButton} onClick={toggleMenu}>
          <span className={styles.hamburgerIcon}></span>
        </button>
      </header>
    </div>
  );
};
