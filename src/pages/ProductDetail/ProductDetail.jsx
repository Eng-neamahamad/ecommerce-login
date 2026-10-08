import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/dataService';
import { useCart } from '../../hooks/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Product not found!</div>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="detail-img" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-price">${product.price}</p>
        <p className="detail-desc">{product.description}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}