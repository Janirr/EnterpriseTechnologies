import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        // response.data.products to tablica produktów
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania produktów:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of products</h1>
      <ul>
        {products.map(product => (
          <ProductItem
            key={product.id}
            title={product.title}
            brand={product.brand}
          />
        ))}
      </ul>
    </div>
  );
}
