// src/pages/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { postRequest } from '../axios';
import './ProductList.css';
import Skeleton from './Skeleton';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('/products');
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAllergenInfo, setProductAllergenInfo] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (products) {
      const sorted = [...products].sort((a, b) => a.selling_price - b.selling_price);
      setSortedProducts(sorted);
    }
  }, [products]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequest('/products', {
        name: productName,
        description: productDescription,
        allergenInfo: productAllergenInfo,
      });
      console.log('Response from POST request:', response); // Log response to terminal
      setResponseMessage('Product added successfully!'); // Set state to display on the page
      setShowModal(false);
      setProductName('');
      setProductDescription('');
      setProductAllergenInfo('');
      // Optionally, you can update the products list without reloading the page
    } catch (error) {
      console.error('Failed to add product', error);
      setResponseMessage('Failed to add product. Please try again.'); // Set state to display on the page
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong. Please check the console for more details.</p>;
  }

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-tile">
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              {product.selling_price && <p>Price: ${product.selling_price}</p>}
            </Link>
          </div>
        ))}
      </div>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      <button
        className="add-product-button"
        onClick={() => setShowModal(true)}
      >
        Add Product
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
              <textarea
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
              <textarea
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
