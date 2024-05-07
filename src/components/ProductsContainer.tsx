import { FunctionComponent } from "react";
import Product1 from "./Product1";
import Product from "./Product";
import styles from "./ProductsContainer.module.css";

const ProductsContainer: FunctionComponent = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsContainerInner}>
        <div className={styles.trendingProductsParent}>
          <h1 className={styles.trendingProducts}>Trending Products</h1>
          <div className={styles.topPicksFor}>
            Top Picks for Sustainable Dental Care
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.divslideshowControlsWrapper}>
          <div className={styles.divslideshowControls}>
            <img
              className={styles.arrowBackIosIcon}
              loading="lazy"
              alt=""
              src="/arrow-back-ios.svg"
            />
            <img
              className={styles.arrowForwardIosIcon}
              loading="lazy"
              alt=""
              src="/arrow-forward-ios.svg"
            />
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.productParent}>
            <Product1 />
            <div className={styles.mLamaMLamaMLam} />
          </div>
          <div className={styles.productGroup}>
            <div className={styles.product}>
              <img
                className={styles.productImageIcon}
                alt=""
                src="/productimage-1@2x.png"
              />
              <div className={styles.container}>
                <div className={styles.details}>
                  <div className={styles.naturalTeethWhiteningContainer}>
                    <p
                      className={styles.naturalTeethWhitening}
                    >{`Natural Teeth Whitening `}</p>
                    <p
                      className={styles.toothpasteTea}
                    >{`Toothpaste - Tea tree & Charcoal`}</p>
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
            <div className={styles.contractBalanceTvlWalletMy} />
          </div>
          <Product
            productImage="/productimage-2@2x.png"
            naturalTeethWhiteningToot="organic bamboo toothbrush with soft natural bamboo bristles "
          />
          <Product
            productImage="/productimage@2x.png"
            naturalTeethWhiteningToot={`Sensitivity Relief Vanilla & Peppermint Natural Mouthwash `}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
