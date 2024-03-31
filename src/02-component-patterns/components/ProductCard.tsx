import styles from "../styles/styles.module.css";
import { createContext,  } from "react";
import useProduct from "../hooks/useProduct";
import { ProductContentProps, Props } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export const productContext = createContext({} as ProductContentProps);
const { Provider } = productContext;

export const ProductCard = ({ product, children }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      
     <div className={styles.productCard}>
     {children}
    </div>
    </Provider>
  );
};



