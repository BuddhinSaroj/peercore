import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts } from './APIUtils';
import './ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log("Error")
      });
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-row mt-5">
        {products?.map(product => (
          <ProductCard key={product.id} prod={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;