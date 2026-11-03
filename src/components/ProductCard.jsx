import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../hooks/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // 1. التحقق المباشر من حالة تسجيل الدخول في الـ localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // 2. إذا لم يكن مسجلاً، أظهر الإشعار فوراً وانقله لصفحة تسجيل الدخول
    if (!isLoggedIn) {
      toast.error('يجب تسجيل الدخول أولاً لإضافة المنتجات إلى السلة! 🔒');
      navigate('/login'); // التوجيه الفوري لصفحة اللوجن
      return; // إيقاف العملية تماماً
    }

    // 3. إذا كان مسجلاً، أضف المنتج للسلة وأظهر رسالة النجاح
    addToCart(product);
    toast.success('تم إضافة المنتج إلى السلة بنجاح! 🎉');
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        إضافة إلى السلة
      </button>
    </div>
  );
}