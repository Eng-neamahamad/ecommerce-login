import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('تم إنشاء الحساب وتسجيل الدخول بنجاح! 🎉');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>MegaMart</h2>
        <p className="login-subtitle">Create a new MegaMart account</p>
        
        <form onSubmit={handleSignupSubmit} autoComplete="off">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Full Name" 
              autoComplete="off"
              name="rand_signup_name_99"
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              autoComplete="off"
              name="rand_signup_email_99"
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
              name="rand_signup_pass_99"
              required 
            />
          </div>

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}