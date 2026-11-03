import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // تأكدنا من توفر الـ toast للتنبيه

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // 🔒 فحص قاطع: هل المستخدم مسجل دخول؟
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      toast.error('يجب تسجيل الدخول أولاً لإضافة المنتجات إلى السلة! 🔒');
      return; // إيقاف العملية فورا وعدم إضافة المنتج للسلة
    }

    // إذا كان مسجلاً، تتم عملية الإضافة أو زيادة الكمية طبيعياً
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success('تم إضافة المنتج إلى السلة بنجاح! 🎉');
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // حساب إجمالي عدد القطع في السلة
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);