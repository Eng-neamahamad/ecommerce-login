import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart'; // استيراد صفحة السلة
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} /> {/* 👈 تأكدي من وجود هذا السطر */}
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
      </Router>
    </CartProvider>
  );
}