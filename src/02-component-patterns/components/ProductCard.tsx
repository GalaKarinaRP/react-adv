import styles from "../styles/styles.module.css";
import { ReactElement, createContext,  } from "react";
import useProduct from "../hooks/useProduct";
import { Product, ProductContentProps } from "../interfaces/interfaces";

export const productContext = createContext({} as ProductContentProps);
const { Provider } = productContext;
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: React.CSSProperties
}


export const ProductCard = ({ product, children, className,  style }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      
     <div className={`${styles.productCard} ${className}`}>
     {children}
    </div>
    </Provider>
  );
};



