import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useProductList from "./useProductList";
import Skeleton from "./Skeleton";

const ProductList = () => {
  const { products, loading, error } = useProductList();

  // Memoize the computed values
  const memoizedValues = useMemo(
    () => ({
      products,
      loading,
      error,
    }),
    [products, loading, error]
  );

  const { products: memoizedProducts, loading: memoizedLoading, error: memoizedError } = memoizedValues;

  return (
    <div className="container mt-5">
      <Link className="link" to="/">
        Home
      </Link>
      <h1 className="mb-4">Product List</h1>
      <Link to="/add-product">
        <button className="btn btn-primary mb-4">Add Product</button>
      </Link>
      {memoizedLoading ? (
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <Skeleton columns={3} />
            </div>
          ))}
        </div>
      ) : memoizedError ? (
        <p>Something went wrong.</p>
      ) : (
        <div className="row">
          {memoizedProducts.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
              <Link to={`/details/${product.id}`} className="text-dark">
                <div className="card">
                  <img src={product.productImage} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Cost Price:</strong> {product.cost_price}
                    </p>
                    <p className="card-text">
                      <strong>Selling Price:</strong> {product.selling_price}
                    </p>
                    <p className="card-text">
                      <strong>Allergen Info:</strong> {product.allergen_info}
                    </p>
                    <p className="card-text">
                      <strong>Cooking Instruction:</strong> {product.cooking_instruction}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
