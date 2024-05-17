import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "./useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAllergenInfoOpen, setIsAllergenInfoOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong.</p>
      ) : product ? (
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
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductDetails;
