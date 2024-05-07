import { FunctionComponent } from "react";
import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";

const Testimonials: FunctionComponent = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsInner}>
        <div className={styles.testimonialsParent}>
          <h1 className={styles.testimonials1}>Testimonials</h1>
          <div className={styles.hearWhatOur}>Hear what our customers say</div>
        </div>
      </div>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <Testimonial
            customerImage="/customer-image@2x.png"
            nigelNigel="Courtney Henry"
          />
          <Testimonial
            customerImage="/customer-image-1@2x.png"
            nigelNigel="Ronald Richards"
            propPadding="0px 0px 0px 0px"
            propPadding1="0px var(--padding-34xl-3) 0px 0px"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <Testimonial
            customerImage="/customer-image-2@2x.png"
            nigelNigel="Jenny Wilson"
            propPadding="unset"
            propPadding1="0px var(--padding-59xl-3) 0px 0px"
            propDisplay="inline-block"
            propMinWidth="107px"
          />
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselChild} />
          <div className={styles.carouselItem} />
          <div className={styles.carouselInner} />
          <div className={styles.rectangleDiv} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
