import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from "../../services/api";
import { useCart } from '../../hooks/CartContext'; // 1. استيراد سياق السلة (تأكدي من صحة مسار الـ hooks حسب مشروعك)

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // 2. تفعيل دالة الإضافة للسلة
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details", err);
        setError("تعذر تحميل تفاصيل المنتج، يرجى المحاولة لاحقاً.");
        setLoading(false);
      }
    };

    if (id) {
      getProduct();
    }
  }, [id]);

  // 1. حالة التحميل
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#fff' }}>جاري تحميل تفاصيل المنتج...</div>;
  }

  // 2. حالة الخطأ
  if (error || !product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p style={{ color: 'red', marginBottom: '15px' }}>{error || "المنتج غير موجود"}</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>العودة للرئيسية</Link>
      </div>
    );
  }

  // 3. عرض تفاصيل المنتج
  return (
    <div className="product-detail-container" style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none', color: '#007bff' }}>
        ← العودة لجميع المنتجات
      </Link>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', background: '#1a1a1a', padding: '30px', borderRadius: '12px' }}>
        {/* صورة المنتج */}
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '8px' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ maxWidth: '100%', maxHeight: '350px', objectFit: 'contain' }} 
          />
        </div>

        {/* معلومات المنتج */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <span style={{ textTransform: 'uppercase', color: '#aaa', fontSize: '0.9rem', fontWeight: 'bold' }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: '1.8rem', margin: '10px 0' }}>{product.title}</h1>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>{product.description}</p>
          
          <div style={{ fontSize: '1.8rem', color: '#28a745', fontWeight: 'bold', marginBottom: '20px' }}>
            ${product.price}
          </div>

          {/* زر إضافة إلى السلة المربوط بالدالة */}
          <button 
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '12px 25px',
              fontSize: '1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background 0.2s'
            }}
          >
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;