import styles from "./style.module.scss";

const Home = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_card}>
        <p className={styles.title_card}>
          Luxury homeware for people who love timeless design quality
        </p>
        <span>Shop the new Spring 2022 collection today</span>
        <button className={styles.button}>View collection</button>
      </div>
    </div>
  );
};

export default Home;
