import styles from "./tools.module.css";

export const Tools = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Private & Secure</div>

      <div className={styles.cardDiv}>
        <div className={styles.card}>
          <img src="/media/tools/Non-Custodial.png" alt="Non custodial" />
          <h2>Non custodial</h2>
          <p>
            We never have access to any of your data or funds. Your funds are
            stored on your device.
          </p>
        </div>

        <div className={styles.card}>
          <img src="/media/tools/Privacy.png" alt="Privacy" />
          <h2>Privacy</h2>
          <p>
            We don't track any personal identifiable information, your account
            addresses, or asset balance.
          </p>
        </div>

        <div className={styles.card}>
          <img src="/media/tools/Legder.png" alt="Ledger Support" />
          <h2>Ledger Support</h2>
          <p>You can connect your hardware wallet for advanced security.</p>
        </div>
      </div>

      <div className={styles.bottomDiv}>
        <h2>Partners:</h2>
        <div className={styles.bottomDivImages}>
          <img src="/media/partners/Near-Logo.png" alt="Partner 1" />
          <img src="/media/partners/Near-Pay-logo.png" alt="Partner 2" />
          <img src="/media/partners/Roketo-logo.png" alt="Partner 3" />
        </div>
      </div>
    </div>
  );
};
