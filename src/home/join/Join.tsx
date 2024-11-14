import styles from "./join.module.css";
export const Join = () => {
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
      <button className={styles.batin}>Create Account</button>
    </div>
  );
};
