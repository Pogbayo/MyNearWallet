import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";
export const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/import");
  };
  return (
    <div className={styles.container}>
      <div className={styles.footerDiv1}>
        <img className={styles.footerLogo} src="/media/footerLogo.png" />
        <nav className={styles.footerNavLinks}>
          <a href="#about" className={styles.navLinkItem}>
            About Near
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
            NEAR ecosystem
          </a>
          <span>
            <span className={styles.divider}></span>
            <img src="/media/Language-icon.svg" alt="" />
            <small>ENG</small>
          </span>
          <button className={styles.troubleshoot} onClick={handleNavigation}>
            Troubleshoot
          </button>
        </nav>
      </div>
      <div className={styles.footerDiv2}>
        <div className={styles.copywright}>
          <small className={styles.c}>
            © 2022 MyNearWallet LLC. All Rights Reserved
          </small>
          <span className={styles.sp}>
            <small>Terms of Service</small>
            <small>Privacy Policy</small>
          </span>
        </div>
        <div className={styles.footerSocialsDiv}>
          <img src="/media/footer/medium.png" alt="" />
          <img src="/media/footer/linkedin2x.png" alt="" />
          <img src="/media/footer/telegram2x.png" alt="" />
          <img src="/media/footer/Twitter_1Twitter.png" alt="" />
          <img src="/media/footer/Discord_1Discord.png" alt="" />
        </div>
      </div>
    </div>
  );
};
