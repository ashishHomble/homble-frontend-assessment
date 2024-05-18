// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching product details:', error);
    return <p>Something went wrong. Please check the console for more details.</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <div className="collapsible">
        <button>Toggle Description</button>
        <div>{product.description}</div>
      </div>
      <div className="collapsible">
        <button>Toggle Allergen Info</button>
        <div>{product.allergenInfo}</div>
      </div>
      <div className="collapsible">
        <button>Toggle Usage</button>
        <div>{product.usage}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
