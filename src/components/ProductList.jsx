import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest("/products");
        const sortedProducts = response.data.sort(
          (a, b) => a.cost_price - b.cost_price
        );
        setProducts(sortedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Link className="link" to="/">
        home
      </Link>
      <h1>Product List</h1>
      <Link to="/add-product">
        <button>Add Product</button>
      </Link>
      {loading ? (
        <div className="product-list">
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Link to={`/details/${product.id}`} key={product.id}>
              {" "}
              {/* Wrap each product tile with Link */}
              <div className="product-card">
                <img src={product.productImage} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>
                  <strong>Cost Price:</strong> {product.cost_price}
                </p>
                <p>
                  <strong>Selling Price:</strong> {product.selling_price}
                </p>
                <p>
                  <strong>Allergen Info:</strong> {product.allergen_info}
                </p>
                <p>
                  <strong>Cooking Instruction:</strong>{" "}
                  {product.cooking_instruction}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
