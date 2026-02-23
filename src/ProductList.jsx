import React from 'react'
import ProductCard from './ProductCard.jsx'

function ProductList({ products = [] }) {
  return (
    <div>
        Product List
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductList;