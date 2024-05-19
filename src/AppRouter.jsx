// src/AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add a route for the Dashboard */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
