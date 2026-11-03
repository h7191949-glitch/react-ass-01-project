
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import CheckOutbar from "./pages/checkout/CheckOutbar";
import PlaceOrder from "./pages/checkout/PlaceOrder";
import ProductPage from "./pages/productDetails/ProductDe";
import Signup from "./pages/signup/signup";
import Casual from "./pages/casualpage/CasualPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorycarts" element={<Casual />} />
      <Route path="/checkout" element={<CheckOutbar />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
