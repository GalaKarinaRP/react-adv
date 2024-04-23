# TSDX React User Guide

```

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

```
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

      ```