import React, { useEffect, useState } from 'react'
import ProductList from './ProductList.jsx'
import './App.css'


export default function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
  })
  .catch((err) => {
    console.error('error fetching products: ', err)
  })
}
  , [])

  return (
    <div className='app'>
      <h1>Product List-2500030985</h1>
      {products.length===0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={products} />
      )
    }
    </div>
  )

}