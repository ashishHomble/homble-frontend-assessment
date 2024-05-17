import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../axios"; // Assuming you have a getRequest function for making GET requests

const ProductDetails = () => {
  const { id } = useParams(); // Access the ID parameter from the URL
  const [product, setProduct] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAllergenInfoOpen, setIsAllergenInfoOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getRequest(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch product data when the ID parameter changes

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleAllergenInfo = () => {
    setIsAllergenInfoOpen(!isAllergenInfoOpen);
  };

  const toggleUsage = () => {
    setIsUsageOpen(!isUsageOpen);
  };
  const toggleCost = () => {
    setIsCostOpen(!isCostOpen);
  };

  return (
    <div>
      <Link className="link" to="/">
        home
      </Link>
      {product ? (
        <div>
          <h2>Product Details</h2>
          <div>
            <h3 onClick={toggleDescription} style={{ cursor: "pointer" }}>
              Description
            </h3>
            {isDescriptionOpen && (
              <div>
                <img src={product.productImage} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            )}
          </div>
          <div>
            <h3 onClick={toggleAllergenInfo} style={{ cursor: "pointer" }}>
              Allergen Info
            </h3>
            {isAllergenInfoOpen && <p>{product.allergen_info}</p>}
          </div>
          <div>
            <h3 onClick={toggleUsage} style={{ cursor: "pointer" }}>
              Usage
            </h3>
            {isUsageOpen && <p>{product.cooking_instruction}</p>}
          </div>
          <div>
            <h3 onClick={toggleCost} style={{ cursor: "pointer" }}>
              Cost
            </h3>
            {isCostOpen && <p>{product.selling_price}</p>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
