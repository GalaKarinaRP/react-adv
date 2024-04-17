import { useCallback, useContext, useState } from "react";
import styles from "../styles/styles.module.css";
import { productContext } from "./ProductCard";

interface Props{
  className?: string,
  style?: React.CSSProperties
}

export const ProductButtons = ( { className, style}: Props) => {

  // TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext(productContext);    

    const isMaxReached = useCallback(
      () => !!maxCount && counter  === maxCount,     
      [counter, maxCount],
    )

    
    
//TODO: si el count === maxCount
// false si no lo es
      return(
          <div className={`${styles.buttonsContainer} ${className}`} style={style}>
          <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
          </button>
          <div className={styles.countLabel}>{counter}</div>
          <button onClick={() => increaseBy(+1)} className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`}>
            +
          </button>
        </div>
      )
  }
