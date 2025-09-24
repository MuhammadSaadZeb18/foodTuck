import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import Menupage from "./pages/menupage";
import Shoppage from "./pages/shoppage";
import BlogPage from "./pages/blogpage";
import ProductDetailPage from "./pages/productDetailPage";
import BlogDetailPage from "./pages/blogDetailpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menupage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop" element={<Shoppage />} />
      <Route path="/shop/:id" element={<ProductDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  );
}

export default App;
