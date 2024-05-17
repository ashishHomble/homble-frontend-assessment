import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./components/productlist/ProductList";
import ProductDetails from "./components/productdetails/ProductDetails";
import ProductDashboard from "./components/ProductDashboard";
import AddProduct from "./components/productlist/AddProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<ProductDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
