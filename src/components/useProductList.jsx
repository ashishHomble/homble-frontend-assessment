import { useState, useEffect } from "react";
import { getRequest } from "../axios";

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getRequest("/products");
        const sortedProducts = response.data.sort(
          (a, b) => a.cost_price - b.cost_price
        );
        setProducts(sortedProducts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProductList;
