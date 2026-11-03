import React, { useState, useEffect } from 'react';
import { fetchBanners } from '../../services/api';
import './HeroBanner.css';

const HeroBanner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const data = await fetchBanners();
        setBanners(data);
      } catch (error) {
        console.error("Failed to load banners", error);
      }
    };
    getBanners();
  }, []);

  // تغيير البانر تلقائياً كل 4 ثوانٍ
  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  if (banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${currentBanner.image})` }}>
      <div className="hero-content">
        <h2>{currentBanner.title}</h2>
        <p>{currentBanner.description}</p>
        <button className="hero-btn">تسوق العرض</button>
      </div>
    </div>
  );
};

export default HeroBanner;