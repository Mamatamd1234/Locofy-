import { FunctionComponent } from "react";
import styles from "./Product1.module.css";

const Product1: FunctionComponent = () => {
  return (
    <div className={styles.product}>
      <img
        className={styles.productImageIcon}
        loading="lazy"
        alt=""
        src="/productimage@2x.png"
      />
      <div className={styles.container}>
        <div className={styles.details}>
          <div
            className={styles.naturalTeethWhitening}
          >{`Sensitivity Relief Vanilla & Peppermint Natural Mouthwash `}</div>
          <div className={styles.price}>
            <div className={styles.div}>$100</div>
            <div className={styles.div1}>$150</div>
          </div>
        </div>
        <button className={styles.buttons}>
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shopping-cart1.svg"
          />
          <div className={styles.addToCart}>Add to Cart</div>
          <div className={styles.iconContainer}>
            <img
              className={styles.arrowForwardIcon}
              alt=""
              src="/arrow-forward-1.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product1;
