import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchProducts, fetchBanners } from '../../services/api';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const catData = await fetchCategories();
        setCategories(['All', ...catData]);

        const bannerData = await fetchBanners();
        setBanners(bannerData);
      } catch (err) {
        console.error("Error fetching initial data", err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  useEffect(() => {
    const getProductsData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(selectedCategory);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("فشل في تحميل المنتجات");
        setLoading(false);
      }
    };
    getProductsData();
  }, [selectedCategory]);

  // دالة التمرير التلقائي عند الضغط على زر تسوق العرض
  const scrollToProducts = () => {
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const currentBanner = banners[currentIndex];

  return (
    <div style={{ paddingBottom: '50px', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      
      {banners.length > 0 && (
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${currentBanner.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '40px',
          padding: '0 20px'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 'bold' }}>{currentBanner.title}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px auto' }}>{currentBanner.description}</p>
            
            {/* زر تسوق العرض المفعل */}
            <button 
              onClick={scrollToProducts}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              تسوق العرض
            </button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ color: '#fff', fontSize: '2.2rem', marginBottom: '25px', textAlign: 'center', fontWeight: '300' }}>
          منتجاتنا المميزة
        </h1>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', overflowX: 'auto', justifyContent: 'center', paddingBottom: '10px' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? '#007bff' : '#f0f0f0',
                color: selectedCategory === category ? '#fff' : '#333',
                fontWeight: '500',
                textTransform: 'capitalize',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: '#fff', textAlign: 'center' }}>جاري التحميل...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {!loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '25px' }}>
            {products.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`} 
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
              >
                <div style={{ 
                  border: '1px solid #ddd', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}>
                  <div>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '15px' }} 
                    />
                    <h3 style={{ fontSize: '0.95rem', color: '#666', marginBottom: '15px', lineHeight: '1.4', fontWeight: '400' }}>
                      {product.title}
                    </h3>
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                    <span style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1.2rem' }}>${product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;