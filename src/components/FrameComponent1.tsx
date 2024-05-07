import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.banner1Parent}>
        <div className={styles.banner1}>
          <div className={styles.frame}>
            <div className={styles.container} />
            <div className={styles.content}>
              <div className={styles.xce} />
              <div className={styles.mouthWashParent}>
                <h1 className={styles.mouthWash}>Mouth Wash</h1>
                <div className={styles.yourGoToChoice}>
                  your go-to choice for a naturally clean and eco-friendly smile
                </div>
              </div>
              <div className={styles.buttonsWrapper}>
                <button className={styles.buttons}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/shopping-cart1.svg"
                  />
                  <div className={styles.addToCart}>Buy Now</div>
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
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frame1}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.highlightParent}>
              <div className={styles.highlight} />
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
                <img
                  className={styles.frameIcon1}
                  alt=""
                  src="/frame-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.banner2}>
          <div className={styles.container1} />
          <div className={styles.content1}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/rectangle-18@2x.png"
            />
            <h1 className={styles.toothBrush}>Tooth Brush</h1>
            <div className={styles.yourGoToChoice1}>
              your go-to choice for a naturally clean and eco-friendly smile
            </div>
            <button className={styles.buttons1}>
              <img
                className={styles.shoppingCartIcon1}
                alt=""
                src="/shopping-cart2.svg"
              />
              <div className={styles.addToCart1}>Buy Now</div>
              <div className={styles.iconContainer1}>
                <img
                  className={styles.arrowForwardIcon1}
                  alt=""
                  src="/arrow-forward-1.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
