import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductDashboard from "./components/ProductDashboard";
import AddProduct from "./components/AddProduct";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} /> {/* Route for ProductDetails with dynamic ID */}
        <Route path="/dashboard" element={<ProductDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
