import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">E-Shop</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">
          Cart <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}