// src/pages/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { postRequest } from '../axios';
import './ProductList.css';

const ProductList = () => {
  // Fetching products data using custom hook useFetch
  const { data: products, loading, error } = useFetch('/products');

  // State variables for handling modal visibility and form input fields
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAllergenInfo, setProductAllergenInfo] = useState('');

  // State variable for holding sorted products
  const [sortedProducts, setSortedProducts] = useState([]);

  // useEffect hook to sort products by selling price when products data changes
  useEffect(() => {
    if (products) {
      // Sorting products array by selling price in ascending order
      const sorted = [...products].sort((a, b) => a.selling_price - b.selling_price);
      // Updating sortedProducts state with sorted array
      setSortedProducts(sorted);
    }
  }, [products]);

  // Function to handle adding a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to add new product
      await postRequest('/products', {
        name: productName,
        description: productDescription,
        allergenInfo: productAllergenInfo,
      });
      // Closing the modal after successful addition
      setShowModal(false);
      // Optionally, you can refresh the product list or notify the user of the success
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  // If data is still loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // If there's an error fetching products, display an error message
  if (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong. Please check the console for more details.</p>;
  }

  // Rendering part
  return (
    <div>
      {/* Displaying sorted products */}
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
      {/* Button to trigger modal for adding a new product */}
      <button onClick={() => setShowModal(true)}>Add Product</button>
      {/* Modal for adding a new product */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button for the modal */}
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add Product</h2>
            {/* Form for adding a new product */}
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
              {/* Button to submit the form */}
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
