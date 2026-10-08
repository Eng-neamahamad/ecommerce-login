import React from 'react';
import { useCart } from '../../hooks/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#666' }}>Your Cart is Empty!</div>;
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="remove-btn">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}