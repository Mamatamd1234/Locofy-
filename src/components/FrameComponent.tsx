import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.promotioanalBannerWrapper}>
      <div className={styles.promotioanalBanner}>
        <div className={styles.frameParent}>
          <div className={styles.frame}>
            <img
              className={styles.productImageIcon}
              alt=""
              src="/product-image@2x.png"
            />
            <div className={styles.frame1}>
              <div className={styles.claimingWillResetTheClaim} />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon} alt="" src="/frame-2.svg" />
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon1} alt="" src="/frame-3@2x.png" />
              <img className={styles.frameIcon2} alt="" src="/frame-4@2x.png" />
            </div>
          </div>
        </div>
        <img className={styles.waterIcon} alt="" src="/water@2x.png" />
        <div className={styles.frame2}>
          <img className={styles.cloveIcon} alt="" src="/clove@2x.png" />
        </div>
        <div className={styles.frame3}>
          <img className={styles.mintIcon} alt="" src="/mint@2x.png" />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frame4}>
            <div className={styles.details}>
              <div className={styles.contentText}>
                <h1 className={styles.pureBlissMouthwashContainer}>
                  <p
                    className={styles.pureBlissMouthwash}
                  >{`Pure Bliss Mouthwash - `}</p>
                  <p className={styles.refreshYourSmile}>
                    Refresh Your Smile Naturally
                  </p>
                </h1>
                <div className={styles.sayGoodbyeTo}>
                  Say goodbye to harsh chemicals and hello to a naturally
                  invigorated smile. Feel the difference of pure, organic oral
                  care with every swish.
                </div>
              </div>
              <button className={styles.buttons}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src="/shopping-cart2.svg"
                />
                <div className={styles.addToCart}>Shop Now</div>
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
      </div>
    </div>
  );
};

export default FrameComponent;
