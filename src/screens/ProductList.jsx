import React, { useEffect } from "react";
import useFetchProducts from "../Hooks/useFetchProducts";
import "./productList.css";

import Loading from "../components/Loading/Loading";
import DisplayCard from "../components/DisplayCard";
import Error from "./Error";

const sortProducts = (data) => {
  const sortedItems = data.sort((a, b) => {
    return a.selling_price - b.selling_price;
  });
  return sortedItems;
};

function ProductList() {
  const { data, isLoading, isError } = useFetchProducts("/products", true);
  const products = sortProducts(data);
  if (isError) {
    return <Error />;
  }

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="grid-container">
        {products.map((item) => {
          return <DisplayCard key={item.id} product={item} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
