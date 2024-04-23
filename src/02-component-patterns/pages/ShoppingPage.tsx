import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const ShoppingPage = () => {
  const product = products[0];

  return (
    <div>
      <h1>Shopping page</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, maxCount, count }) => (
          <>
            <ProductImage />
            <ProductTitle  />
            <ProductButtons  />
            
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
