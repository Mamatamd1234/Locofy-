import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Card />
      <div className={styles.card1}>
        <div className={styles.noParabenWrapper}>
          <div className={styles.noParaben}>
            <img
              className={styles.iconSwap}
              loading="lazy"
              alt=""
              src="/iconswap@2x.png"
            />
          </div>
        </div>
        <div className={styles.noArtificialColours}>No Paraben</div>
      </div>
      <div className={styles.card11}>
        <div className={styles.vegan}>
          <img className={styles.iconSwap1} alt="" src="/iconswap-1@2x.png" />
        </div>
        <div className={styles.noArtificialColoursWrapper}>
          <div className={styles.noArtificialColours1}>Vegan</div>
        </div>
      </div>
      <Card propBackgroundColor="#efe" />
    </div>
  );
};

export default Container;
