import React, { useState } from 'react';
import Model from './Model'; // Import your Model component
import { postRequest } from '../axios'; // Import your post request function

const ProductDetails = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAllergenInfo, setProductAllergenInfo] = useState('');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductAllergenInfoChange = (event) => {
    setProductAllergenInfo(event.target.value);
  };

  const handleSubmit = async () => {
    if (!productName || !productDescription || !productAllergenInfo) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const response = await postRequest('/products', {
        name: productName,
        description: productDescription,
        allergen_info: productAllergenInfo
      });
      // Handle success response, maybe close the Model or show a success message
      console.log('Product added successfully:', response.data); // i guess api givin response.data as ---Product created successfull
      setIsModelOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <button onClick={() => setIsModelOpen(true)}>Add Product</button>
      {isModelOpen && (
        <Model onClose={() => setIsModelOpen(false)}>
          <h2>Add Product</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            placeholder="Product Description"
            required
          />
          <input
            type="text"
            value={productAllergenInfo}
            onChange={handleProductAllergenInfoChange}
            placeholder="Product Allergen Info"
            required
          />
          <button onClick={handleSubmit}>Add</button>
        </Model>
      )}
    </div>
  );
};

export default ProductDetails;
