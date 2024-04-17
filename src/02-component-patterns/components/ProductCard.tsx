import styles from "../styles/styles.module.css";
import { ReactElement, createContext } from "react";
import useProduct from "../hooks/useProduct";
import {
  InitialValues,
  Product,
  ProductCartHandlers,
  ProductContentProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const productContext = createContext({} as ProductContentProps);

const { Provider } = productContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[],
  children: (args: ProductCartHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product: product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
