import { useState, useEffect, useMemo } from "react";
import { getRequest } from "../../axios";

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

    return () => {
      // Cleanup function
    };
  }, []);

  // Memoize the computed values
  const memoizedValues = useMemo(() => ({
    products,
    loading,
    error
  }), [products, loading, error]);

  return memoizedValues;
};

export default useProductList;
