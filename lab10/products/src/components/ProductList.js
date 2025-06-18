import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania produktów:', error);
      });
  }, []);

  // Pomocnicza funkcja do obsługi zmiany pola tekstowego
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filtrowanie produktów po tytule (case insensitive)
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>List of products</h1>

      <label>
        Filter by product title:{" "}
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter product title"
        />
      </label>

      <ul>
        {filteredProducts.map(product => (
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
