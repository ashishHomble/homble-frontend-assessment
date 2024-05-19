import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./screens/ProductDetails";
import ProductDashboard from "./screens/ProductDashboard";

const AppRouter = () => {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setShow={setShow} />
      <AddProduct show={show} setShow={setShow} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
