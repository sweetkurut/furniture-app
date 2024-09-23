import { cardData } from "./helper";
import styles from "./style.module.scss";

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>What makes our brand different</h2>
      <div className={styles.cards}>
        {cardData.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.card_content}>
              <img src={item.icon} alt="card-img" className={styles.card_img} />
              <h3 className={styles.card_title}>{item.title}</h3>
              <p className={styles.card_description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
