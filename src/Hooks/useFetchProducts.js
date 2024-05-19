import { useState, useEffect } from "react";
import { getRequest } from "../axios";

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    try {
      const res = await getRequest(url);
      setData(res.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const sortBySP = () => {
    const sortedData = [...data].sort(
      (a, b) => a.selling_price - b.selling_price
    );
    setData(sortedData);
  };

  const sortByCP = () => {
    const sortedData = [...data].sort((a, b) => a.cost_price - b.cost_price);
    setData(sortedData);
  };

  const sortByName = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  };

  const deleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log("triggerd");
  };

  const searchData = async (query) => {
    if (query === "") {
      await getProducts();
      return;
    }
    const updatedData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.id.includes(query.toString())
      );
    });
    setData(updatedData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    data,
    isLoading,
    isError,
    deleteItem,
    sortByCP,
    sortBySP,
    sortByName,
    searchData,
  };
};

export default useFetchProducts;
