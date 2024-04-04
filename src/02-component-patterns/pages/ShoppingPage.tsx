import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components"
import  '../styles/custom-styles.css';
const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping page</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
      }}>     

        <ProductCard product={product}>
          <ProductCard.Image  img={product.img}/>
          <ProductCard.Title  className="text-white" title={product.title}/>
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
         product={product}
         className="bg-dark text-white"
      
         >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" title={'Hola mundo'}/>
          <ProductButtons className="custom-buttons"  />
        </ProductCard>

        <ProductCard
         product={product} 
         style={{backgroundColor:'#ccc'}    } 
         >
          <ProductImage  />
          <ProductTitle />
          <ProductButtons  />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
