import React, { useState } from "react";
import Model from "./Model"; // Import your Model component
import { postRequest } from "../../axios"; // Import your post request function
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productAllergenInfo, setProductAllergenInfo] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await postRequest("/products", {
        name: productName,
        description: productDescription,
        allergen_info: productAllergenInfo,
      });
      // Handle success response, maybe close the Model or show a success message
      console.log("Product added successfully:", response.data); // i guess api givin response.data as ---Product created successfull
      setIsModelOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, maybe show an error message to the user
    }
    setProductName("");
    setProductDescription("");
    setProductAllergenInfo("");
  };

  return (
    <div className="container mt-5"> {/* Utilizing Bootstrap container and margin top class */}
      <Link className="link" to="/">
        home
      </Link>
      <div className="mb-3"> {/* Adding margin bottom between the link and the button */}
        <button className="btn btn-primary" onClick={() => setIsModelOpen(true)}>Add Product</button> {/* Utilizing Bootstrap button styling */}
      </div>
      {isModelOpen && (
        <Model onClose={() => setIsModelOpen(false)}>
          <h2>Add Product</h2>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="mb-3"> {/* Adding margin bottom between the header and the input fields */}
            <input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              className="form-control" // Utilizing Bootstrap form-control class
              placeholder="Product Name"
              required
            />
          </div>
          <div className="mb-3"> {/* Adding margin bottom between the input fields */}
            <input
              type="text"
              value={productDescription}
              onChange={handleProductDescriptionChange}
              className="form-control" // Utilizing Bootstrap form-control class
              placeholder="Product Description"
              required
            />
          </div>
          <div className="mb-3"> {/* Adding margin bottom between the input fields */}
            <input
              type="text"
              value={productAllergenInfo}
              onChange={handleProductAllergenInfoChange}
              className="form-control" // Utilizing Bootstrap form-control class
              placeholder="Product Allergen Info"
              required
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>Add</button> {/* Utilizing Bootstrap button styling */}
        </Model>
      )}
    </div>
  );
};

export default AddProduct;
