import { FunctionComponent } from "react";
import styles from "./HeroBanner.module.css";

const HeroBanner: FunctionComponent = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1 className={styles.echoFriendy}>Echo - Friendy Smile</h1>
          <div className={styles.transformYourDental}>
            Transform Your Dental Routine with Eco-Friendly Toothbrushes
          </div>
        </div>
        <button className={styles.buttons}>
          <div className={styles.button}>
            <div className={styles.iconContainer}>
              <img
                className={styles.infoOutlineIcon}
                alt=""
                src="/info-outline.svg"
              />
            </div>
            <div className={styles.shopNow}>SHOP NOW</div>
            <div className={styles.iconContainer1}>
              <img
                className={styles.arrowForwardIcon}
                alt=""
                src="/arrow-forward.svg"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
