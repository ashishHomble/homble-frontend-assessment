import React, { useEffect, useState } from "react";
import { getRequest } from "../axios"; // Adjust the import path to point to the axios.js file
import Skeleton from "./Skeleton"; // Import the Skeleton component
import './ProductList.css'; // Ensure this path is correct and points to your CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest("/products");
        const sortedProducts = response.data.sort((a, b) => a.cost_price - b.cost_price);
        setProducts(sortedProducts);
        setLoading(false); // Set loading to false once products are fetched
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <div className="product-list">
          {/* Display skeleton components while loading */}
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.productImage}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><strong>Cost Price:</strong> {product.cost_price}</p>
              <p><strong>Selling Price:</strong> {product.selling_price}</p>
              <p><strong>Allergen Info:</strong> {product.allergen_info}</p>
              <p><strong>Cooking Instruction:</strong> {product.cooking_instruction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
