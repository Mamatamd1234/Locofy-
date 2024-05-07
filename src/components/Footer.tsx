import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.screenshot20240411At216Parent}>
          <img
            className={styles.screenshot20240411At216}
            alt=""
            src="/screenshot-20240411-at-216-1-1@2x.png"
          />
          <div className={styles.ecoDentalIsYourGoToDestiWrapper}>
            <div className={styles.ecoDentalIs}>
              Eco Dental is your go-to destination for premium natural oral care
              products. We are dedicated to providing you with a holistic
              approach to dental hygiene, harnessing the power of nature to
              promote a healthy smile.
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.facebookIconParent}>
              <div className={styles.facebookIcon}>
                <div className={styles.rectangle} />
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <img
                className={styles.linkedinIcon}
                loading="lazy"
                alt=""
                src="/linkedin-icon.svg"
              />
              <div className={styles.twitterIcon}>
                <div className={styles.rectangle1} />
                <img
                  className={styles.instagramLogoIcon}
                  alt=""
                  src="/instagram-logo.svg"
                />
              </div>
              <div className={styles.twitterIcon1}>
                <div className={styles.rectangle2} />
                <img
                  className={styles.twitterIcon2}
                  alt=""
                  src="/twitter.svg"
                />
              </div>
              <img
                className={styles.twitterIcon3}
                loading="lazy"
                alt=""
                src="/twitter-icon.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.quickLinksParent}>
          <b className={styles.quickLinks}>Quick Links</b>
          <div className={styles.frameGroup}>
            <div className={styles.quickLinksWrapper}>
              <div className={styles.quickLinks1}>Quick Links</div>
            </div>
            <div className={styles.ourStoryWrapper}>
              <div className={styles.ourStory}>Our Story</div>
            </div>
            <div className={styles.contactUsWrapper}>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.shippingDeliveryWrapper}>
              <div
                className={styles.shippingDelivery}
              >{`Shipping & Delivery`}</div>
            </div>
          </div>
        </div>
        <div className={styles.receiveOffersDiscountsViaParent}>
          <b
            className={styles.receiveOffers}
          >{`Receive offers & discounts via e-mail`}</b>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.emailParent}>
                <img className={styles.emailIcon} alt="" src="/email.svg" />
                <input
                  className={styles.enterEmail}
                  placeholder="Enter Email"
                  type="text"
                />
              </div>
            </div>
            <button className={styles.buttonVariants}>
              <div className={styles.button}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src="/shopping-cart3.svg"
                />
                <div className={styles.button1}>Subscribe</div>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.arrowForwardIcon}
                    alt=""
                    src="/arrow-forward-1.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.ecoDentalAllRightsReservParent}>
          <div className={styles.ecoDental}>
            © 2024, Eco Dental - All rights reserved.
          </div>
          <div className={styles.termsConditionsParent}>
            <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.refundPolicy}>Refund Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
