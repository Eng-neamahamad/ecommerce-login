import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart'; // استيراد صفحة السلة
import Login from './components/Auth/Login';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> {/* مسار صفحة السلة */}
        </Routes>
      </Router>
    </CartProvider>
  );
}