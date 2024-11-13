import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";


import { Home } from "../pages/home";
import {Checkout }from "../../src/components";
import { ProductDetails } from "../pages/product-details";

const AppRoutes = () => {
  return (
    <Routes>
    
      <Route
        path="/home"
        element={  <Home />}
      />
      
      <Route
        path="/checkout"
        element={  <Checkout />}
      />
 <Route
        path="/product/:id"
        element={  <ProductDetails  />}
      />

      
      <Route
        path="*"
        element={  <Home />}
      />
    </Routes>
  );
};

export default AppRoutes;
