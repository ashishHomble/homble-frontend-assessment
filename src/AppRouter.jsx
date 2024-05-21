import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import ProductListingPage from './screens/ProductListingPage';
import ProductDetailPage from './screens/ProductDetailPage'; // Assuming you have a detail page

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
  </Router>
);

export default AppRouter;

