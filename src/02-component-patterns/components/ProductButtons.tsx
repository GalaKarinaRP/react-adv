import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { productContext } from "./ProductCard";

interface Props{
  className?: string,
  style?: React.CSSProperties
}

export const ProductButtons = ( { className, style}: Props) => {

    const { increaseBy, counter } = useContext(productContext);
  
      return(
          <div className={`${styles.buttonsContainer} ${className}`} style={style}>
          <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
          </button>
          <div className={styles.countLabel}>{counter}</div>
          <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
            +
          </button>
        </div>
      )
  }
  