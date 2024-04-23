import { InitialValues } from './../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs{
  product: Product,
  onChange?: ( args: onChangeArgs) => void, 
  value?: number,
  initialValues?: InitialValues
}

const useProduct = ( { onChange , product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);


    useEffect(() => {
      if (!isMounted.current) return;
      setCounter(initialValues?.count || value);
  }, [initialValues, value]);

  useEffect(() => {
      isMounted.current = true;
  }, []);

  const reset = () => {
    setCounter(initialValues?.count || value )
  }
   
    

    const increaseBy = ( value : number) => {     
      
      let newValue = Math.max( counter + value, 0)
      if(initialValues?.maxCount) {
        newValue = Math.min(newValue, initialValues.maxCount)
      }
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }
    
  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount:initialValues?.maxCount,
    increaseBy,
    reset
  }
}

export default useProduct;
