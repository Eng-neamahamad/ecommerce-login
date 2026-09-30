import React from 'react';
import './Login.css';

function Login({ onSwitchToSignup }) {
  return (
    <div className="login-wrapper">
      {/* القسم العلوي */}
      <div className="login-hero">
        <h1>Make your shopping wishlist, we'll do the rest</h1>
      </div>

      {/* محتوى صفحة تسجيل الدخول */}
      <div className="login-container">
        <div className="login-card">
          
          {/* شعار المتجر */}
          <div className="store-brand">
            <div className="brand-icon">🛒</div>
            <h2>Shop Now</h2>
          </div>

          <div className="login-header-text">
            <h3>Login</h3>
            <p>Login to access your account</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
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

            {/* صف خيارات التذكير ونسيت كلمة المرور */}
            <div className="options-row">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password</a>
            </div>

            <button type="submit" className="login-submit-btn">Login</button>
          </form>

          {/* رابط إنشاء حساب جديد - تم تفعيله */}
          <div className="signup-prompt">
            Don't have an account? <span onClick={onSwitchToSignup} style={{ color: '#1d4ed8', cursor: 'pointer', fontWeight: 600 }}>Sign up</span>
          </div>

          {/* فاصل Or login with */}
          <div className="divider">
            <span>Or login with</span>
          </div>

          {/* زر Google فقط */}
          <div className="social-login-row">
            <button type="button" className="social-btn google-btn">
              <span>G</span> Google
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;