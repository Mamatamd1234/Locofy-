import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Testimonial.module.css";

export type TestimonialType = {
  customerImage?: string;
  nigelNigel?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  customerImage,
  nigelNigel,
  propPadding,
  propPadding1,
  propDisplay,
  propMinWidth,
}) => {
  const customerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nigelNigelStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.testimonial}>
      <div className={styles.quiteDifferentYouContainer}>
        <p
          className={styles.quiteDifferentYou}
        >{`Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using `}</p>
        <p className={styles.teaTree}>{`Tea tree & Charcoal tooth paste.`}</p>
      </div>
      <div className={styles.customer} style={customerStyle}>
        <div className={styles.details} style={detailsStyle}>
          <img
            className={styles.customerImageIcon}
            loading="lazy"
            alt=""
            src={customerImage}
          />
          <div className={styles.details1}>
            <div className={styles.nigelNigel} style={nigelNigelStyle}>
              {nigelNigel}
            </div>
            <div className={styles.costomer}>Costomer</div>
          </div>
        </div>
        <div className={styles.icon}>
          <img
            className={styles.iconChild}
            loading="lazy"
            alt=""
            src="/rectangle-7.svg"
          />
          <img
            className={styles.iconItem}
            loading="lazy"
            alt=""
            src="/rectangle-7.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
