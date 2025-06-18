import React, { useState } from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

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
      id={product.id}          
      title={product.title}
      brand={product.brand}
    />
  ))}
</ul>
    </div>
  );
}
