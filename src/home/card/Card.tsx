import styles from "./card.module.css";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>Discover all the features of NEAR</div>

      {/* Card 1 */}
      <div className={`${styles.cardDiv} ${styles.cardDiv1}`}>
        <div className={styles.imageDiv}>
          <img
            src="/media/cardImages/NFT-icon-p-500.png" // Replace with your actual image path
            alt="Collect NFTs"
            className={styles.cardImage}
          />
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.cardTitle}>Collect NFTs</h1>
          <p className={styles.cardDescription}>
            Gather your NFT collection in one place. Easy to own and transfer.
          </p>
          <div className={styles.cardFooter}>
            <span>Where to buy NFT</span>
            <FaArrowRight className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className={`${styles.cardDiv} ${styles.cardDiv2}`}>
        <div className={styles.contentDiv}>
          <h1 className={styles.cardTitle}>Earn NEAR</h1>
          <p className={styles.cardDescription}>
            Stake your NEAR and get reward ~10% APY. Fast and simple.
          </p>
          <div className={styles.cardFooter}>
            <span>How to stake NEAR</span>
            <FaArrowRight className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.imageDiv}>
          <img
            src="/media/cardImages/Coins-p-500.png" // Replace with your actual image path
            alt="Earn NEAR"
            className={styles.cardImage}
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className={`${styles.cardDiv} ${styles.cardDiv3}`}>
        <div className={styles.imageDiv}>
          <img
            src="/media/cardImages/Apps-p-500.png" // Replace with your actual image path
            alt="Explore dApps"
            className={styles.cardImage}
          />
        </div>
        <div className={styles.contentDiv}>
          <h1 className={styles.cardTitle}>Explore dApps</h1>
          <p className={styles.cardDescription}>
            500+ projects building on NEAR and Aurora ecosystem. Choose the ones
            you like, connect your wallet and enjoy!
          </p>
          <div className={styles.cardFooter}>
            <span>How to connect dApps</span>
            <FaArrowRight className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
