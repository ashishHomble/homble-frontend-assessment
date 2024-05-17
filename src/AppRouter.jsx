import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductDashboard from "./components/ProductDashboard";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" component={ProductDetails} /> {/* Route for ProductDetails with dynamic ID */}
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
