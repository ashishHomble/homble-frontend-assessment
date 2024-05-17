import { useState, useEffect } from "react";
import { getRequest } from "../axios";

const useProductDetails = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getRequest(`/products/${id}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {
      // Cleanup function
    };
  }, [id]);

  return { product, isLoading, error };
};

export default useProductDetails;
