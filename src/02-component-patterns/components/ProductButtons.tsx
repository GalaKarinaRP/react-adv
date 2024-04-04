import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { productContext } from "./ProductCard";

interface Props{
  className?: string
}

export const ProductButtons = ( { className }: Props) => {

    const { increaseBy, counter } = useContext(productContext);
  
      return(
          <div className={`${styles.buttonsContainer} ${className}`}>
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
  