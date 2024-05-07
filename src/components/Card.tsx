import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Card: FunctionComponent<CardType> = ({ propBackgroundColor }) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.card1} style={card1Style}>
      <div className={styles.noArtificialColorsWrapper}>
        <img
          className={styles.noArtificialColors}
          loading="lazy"
          alt=""
          src="/no-artificial-colors@2x.png"
        />
      </div>
      <div className={styles.noArtificialColoursContainer}>
        <span className={styles.noArtificialColoursContainer1}>
          <p className={styles.noArtificial}>{`No Artificial `}</p>
          <p className={styles.colours}>Colours</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
