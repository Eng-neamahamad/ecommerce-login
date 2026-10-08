import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      navigate('/login'); // يوديكِ لتسجيل الدخول إذا لم تقومي بتسجيله بعد
    } else {
      addToCart(product); // يضيفه للسلة مباشرة إذا كنتِ مسجلة دخول
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p className="product-price">${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}