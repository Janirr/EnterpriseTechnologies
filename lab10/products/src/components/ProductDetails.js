import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const productId = Number(id);

  const filtered = products.filter(product => product.id === productId);

  if (filtered.length === 0) {
    return null;
  }

  const product = filtered[0];

  return (
    <div>
      <h1>{product.title}</h1>
      <p>
        Category: {product.category} <br />
        Brand: {product.brand} <br />
        Description: {product.description} <br />
        Price: ${product.price} <br />
      </p>
      <img src={product.thumbnail} alt={product.title} />
      <br />
      <Link to="/">Back to product list</Link>
    </div>
  );
}
