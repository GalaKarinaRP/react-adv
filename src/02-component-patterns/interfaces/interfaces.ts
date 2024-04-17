
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";



export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export interface ProductContentProps {
    counter: number;
    increaseBy: ( value: number) => void,
    product: Product;
    maxCount?:number;
    
  }

export interface ProductCardHOCProps{
  ({children, product}: ProductCardProps):JSX.Element,
  Title:(Props:ProductTitleProps) => JSX.Element,
  Image: ({ img }: ProductImageProps) => JSX.Element,
  Buttons: ({ className }: {className?: string}) => JSX.Element
}
  

export interface onChangeArgs{
  product: Product, 
  count: number
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues{
  count?:number,
  maxCount?: number
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product:Product;
  increaseBy: ( value: number) => void;
  reset: () => void;
}