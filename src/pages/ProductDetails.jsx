import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [allergenInfoVisible, setAllergenInfoVisible] = useState(false);
  const [usageVisible, setUsageVisible] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching product details:', error);
    return <p>Something went wrong. Please check the console for more details.</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: ${product.selling_price}</p>

      <div className="collapsible">
        <button onClick={() => setDescriptionVisible(!descriptionVisible)}>
          {descriptionVisible ? 'Hide' : 'Show'} Description
        </button>
        <div className={`content ${descriptionVisible ? 'show' : ''}`}>
          {product.description}
        </div>
      </div>

      <div className="collapsible">
        <button onClick={() => setAllergenInfoVisible(!allergenInfoVisible)}>
          {allergenInfoVisible ? 'Hide' : 'Show'} Allergen Info
        </button>
        <div className={`content ${allergenInfoVisible ? 'show' : ''}`}>
          {product.allergen_info}
        </div>
      </div>

      <div className="collapsible">
        <button onClick={() => setUsageVisible(!usageVisible)}>
          {usageVisible ? 'Hide' : 'Show'} Usage
        </button>
        <div className={`content ${usageVisible ? 'show' : ''}`}>
          {product.cooking_instruction}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
