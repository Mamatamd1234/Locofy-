import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.screenshot20240411At216}
        loading="lazy"
        alt=""
        src="/screenshot-20240411-at-216-1@2x.png"
      />
      <div className={styles.tabsParent}>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <div className={styles.tab1}>
              <div className={styles.home}>Home</div>
              <div className={styles.accountCircleParent}>
                <img
                  className={styles.accountCircleIcon}
                  alt=""
                  src="/account-circle.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon}
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.tab2}>
            <div className={styles.tab3}>
              <div className={styles.home1}>Teeth whitening</div>
              <div className={styles.accountCircleGroup}>
                <img
                  className={styles.accountCircleIcon1}
                  alt=""
                  src="/account-circle.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon1}
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.tab4}>
            <div className={styles.tab5}>
              <div className={styles.home2}>Toothpaste</div>
              <div className={styles.accountCircleContainer}>
                <img
                  className={styles.accountCircleIcon2}
                  alt=""
                  src="/account-circle.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon2}
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.tab6}>
            <div className={styles.tab7}>
              <div className={styles.home3}>Mouthwash</div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.accountCircleIcon3}
                  alt=""
                  src="/account-circle.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon3}
                  alt=""
                  src="/keyboard-arrow-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.accountCircleParent1}>
            <img
              className={styles.accountCircleIcon4}
              alt=""
              src="/account-circle.svg"
            />
            <img
              className={styles.accountCircleIcon5}
              loading="lazy"
              alt=""
              src="/account-circle.svg"
            />
          </div>
          <div className={styles.personOutlineParent}>
            <img
              className={styles.personOutlineIcon}
              alt=""
              src="/person-outline.svg"
            />
            <img
              className={styles.shoppingCartIcon}
              loading="lazy"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <b className={styles.b}>2</b>
      </div>
    </header>
  );
};

export default Header;
