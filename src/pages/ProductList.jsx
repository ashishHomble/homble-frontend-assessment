// src/pages/ProductList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { postRequest } from '../axios';
import './ProductList.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('/products');
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAllergenInfo, setProductAllergenInfo] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await postRequest('/products', {
        name: productName,
        description: productDescription,
        allergenInfo: productAllergenInfo,
      });
      setShowModal(false);
      // Optionally, you can refresh the product list or notify the user of the success
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong. Please check the console for more details.</p>;
  }

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-tile">
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              {product.price && <p>Price: ${product.price}</p>}
            </Link>
          </div>
        ))}
      </div>
      <button onClick={() => setShowModal(true)}>Add Product</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Product Allergen Info"
                value={productAllergenInfo}
                onChange={(e) => setProductAllergenInfo(e.target.value)}
                required
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
