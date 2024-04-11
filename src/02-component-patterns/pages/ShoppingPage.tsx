import { useState } from "react";
import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces";
import  '../styles/custom-styles.css';
import useShoppingCart from "../hooks/useShoppingCart";


const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange, products} = useShoppingCart();

  return (
    <div >
      <h1>Shopping page</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
      }}>   
      {
        products.map(product => (
          <ProductCard
          key={product.id}
          product={product}
          className="bg-dark"
          onChange={onProductCountChange }
          value={ shoppingCart[product.id]?.count || 0}
          >
           <ProductImage className="custom-image" style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.5)'}} />
           <ProductTitle className="text-bold" />
           <ProductButtons className="custom-buttons"  />
         </ProductCard>
        ))
      }

       

      
      </div>

      <div className="shopping-cart"> 
        {
          shoppingCart &&
          Object.entries(shoppingCart).map(([ key, product ]) => ( 
          <ProductCard
            key={ key }
            product={product}
            className="bg-dark text-white"
            style={{width:'100px'}} 
            value={product.count}                
            onChange={onProductCountChange }   
            >
            <ProductImage className="custom-image" style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.5)'}} />
            <ProductButtons className="custom-buttons"
            style={{display:'flex', justifyContent:'center'}}  />
          </ProductCard>))
         
        }        
      </div>

      <div>
        <code>
          {
            JSON.stringify(shoppingCart, null,5)
          }
        </code>
      </div>
    </div>
  )
}

export default ShoppingPage
