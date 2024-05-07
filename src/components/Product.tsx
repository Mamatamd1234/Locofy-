import { FunctionComponent } from "react";
import styles from "./Product.module.css";

export type ProductType = {
  productImage?: string;
  naturalTeethWhiteningToot?: string;
};

const Product: FunctionComponent<ProductType> = ({
  productImage,
  naturalTeethWhiteningToot,
}) => {
  return (
    <div className={styles.product}>
      <img className={styles.productImageIcon} alt="" src={productImage} />
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.naturalTeethWhitening}>
            {naturalTeethWhiteningToot}
          </div>
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

export default Product;
