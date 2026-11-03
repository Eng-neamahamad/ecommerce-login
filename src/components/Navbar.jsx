import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';
import { toast } from 'react-toastify';
import './Navbar.css';

export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    // مسح حالة تسجيل الدخول من التخزين المحلي
    localStorage.removeItem('isLoggedIn');
    toast.info('تم تسجيل الخروج بنجاح! 👋');
    navigate('/login');
    window.location.reload(); // إعادة تحميل الصفحة لتحديث حالة الـ Navbar تماماً
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">E-Shop</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <Link to="/cart">
          Cart <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}