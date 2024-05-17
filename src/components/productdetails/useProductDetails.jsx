import { useState, useEffect, useMemo } from "react";
import { getRequest } from "../../axios";

const useProductDetails = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getRequest(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      // Cleanup function
    };
  }, [id]);

  // Memoize the computed values
  const memoizedValues = useMemo(() => ({
    product,
    loading,
    error
  }), [product, loading, error]);

  return memoizedValues;
};

export default useProductDetails;
