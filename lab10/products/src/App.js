import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} />,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    }
  ]);

  return <RouterProvider router={router} />;
}
