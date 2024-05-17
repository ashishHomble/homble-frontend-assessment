import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "./useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAllergenInfoOpen, setIsAllergenInfoOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);

  // Memoize the computed values
  const memoizedValues = useMemo(() => ({
    product,
    loading,
    error
  }), [product, loading, error]);

  const { product: memoizedProduct, loading: memoizedLoading, error: memoizedError } = memoizedValues;

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
      {memoizedLoading ? (
        <p>Loading...</p>
      ) : memoizedError ? (
        <p>Something went wrong.</p>
      ) : memoizedProduct ? (
        <div>
          <h2>Product Details</h2>
          <div>
            <h3 onClick={toggleDescription} style={{ cursor: "pointer" }}>
              Description
            </h3>
            {isDescriptionOpen && (
              <div>
                <img src={memoizedProduct.productImage} alt={memoizedProduct.name} />
                <h3>{memoizedProduct.name}</h3>
                <p>{memoizedProduct.description}</p>
              </div>
            )}
          </div>
          <div>
            <h3 onClick={toggleAllergenInfo} style={{ cursor: "pointer" }}>
              Allergen Info
            </h3>
            {isAllergenInfoOpen && <p>{memoizedProduct.allergen_info}</p>}
          </div>
          <div>
            <h3 onClick={toggleUsage} style={{ cursor: "pointer" }}>
              Usage
            </h3>
            {isUsageOpen && <p>{memoizedProduct.cooking_instruction}</p>}
          </div>
          <div>
            <h3 onClick={toggleCost} style={{ cursor: "pointer" }}>
              Cost
            </h3>
            {isCostOpen && <p>{memoizedProduct.selling_price}</p>}
          </div>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductDetails;
