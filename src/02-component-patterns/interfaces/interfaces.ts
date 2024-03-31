import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
  }
  
export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export interface ProductContentProps {
    counter: number;
    increaseBy: ( value: number) => void,
    product: Product
    
  }

export interface ProductCardHOCProps{
  Title:({ title }: { title: string;}) => JSX.Element,
  Image: ({ img }: { img?: string | undefined;}) => JSX.Element,
  Buttons: () => JSX.Element
}
  