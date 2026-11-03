import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('تم تسجيل الدخول بنجاح! 👋');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>MegaMart</h2>
        <p className="login-subtitle">Login to access your MegaMart account</p>
        
        <form onSubmit={handleLoginSubmit} autoComplete="off">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              autoComplete="off"
              name="rand_login_email_99"
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              autoComplete="new-password"
              name="rand_login_pass_99"
              required 
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()}>Forgot Password</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}