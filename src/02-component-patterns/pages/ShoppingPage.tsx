import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components"

const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
      }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Hola mundo'}/>
          <ProductButtons  />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image img={product.img}/>
          <ProductCard.Title title={product.title}/>
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
