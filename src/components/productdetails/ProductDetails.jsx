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
    <div className="container mt-5">
      <Link className="link" to="/">
        HOME
      </Link>
      {memoizedLoading ? (
        <p>LOADING...</p>
      ) : memoizedError ? (
        <p>SOMETHING WENT WRONG.</p>
      ) : memoizedProduct ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th colSpan="3" className="text-center">PRODUCT DETAILS</th>
              </tr>
              <tr>
                <td colSpan="3">
                  <h3 onClick={toggleDescription} className="text-primary" style={{ cursor: "pointer" }}>DESCRIPTION</h3>
                  {isDescriptionOpen && (
                    <div>
                      <img src={memoizedProduct.productImage} alt={memoizedProduct.name} />
                      <h3>{memoizedProduct.name}</h3>
                      <p>{memoizedProduct.description}</p>
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h3 onClick={toggleAllergenInfo} className="text-primary" style={{ cursor: "pointer" }}>ALLERGEN INFO</h3>
                  {isAllergenInfoOpen && <p>{memoizedProduct.allergen_info}</p>}
                </td>
                <td>
                  <h3 onClick={toggleUsage} className="text-primary" style={{ cursor: "pointer" }}>USAGE</h3>
                  {isUsageOpen && <p>{memoizedProduct.cooking_instruction}</p>}
                </td>
                <td>
                  <h3 onClick={toggleCost} className="text-primary" style={{ cursor: "pointer" }}>COST</h3>
                  {isCostOpen && <p>{memoizedProduct.selling_price}</p>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>NO PRODUCT FOUND</p>
      )}
    </div>
  );
};

export default ProductDetails;
