import React from 'react';
import './Login.css'; // سنستخدم نفس تصميم صفحة الدخول لتوحيد الشكل

function Signup({ onSwitchToLogin }) {
  return (
    <div className="login-wrapper">
      {/* القسم العلوي */}
      <div className="login-hero">
        <h1>Make your shopping wishlist, we'll do the rest</h1>
      </div>

      {/* محتوى صفحة إنشاء الحساب */}
      <div className="login-container">
        <div className="login-card">
          
          {/* شعار المتجر */}
          <div className="store-brand">
            <div className="brand-icon">🛒</div>
            <h2>Shop Now</h2>
          </div>

          <div className="login-header-text">
            <h3>Create Account</h3>
            <p>Sign up to start your shopping journey</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                autoComplete="off"
                required 
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                autoComplete="off"
                required 
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                autoComplete="new-password"
                required 
              />
            </div>

            <button type="submit" className="login-submit-btn">Sign Up</button>
          </form>

          {/* العودة لصفحة تسجيل الدخول */}
          <div className="signup-prompt">
            Already have an account? <span onClick={onSwitchToLogin} style={{ color: '#1d4ed8', cursor: 'pointer', fontWeight: 600 }}>Login</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;