// --- src/pages/Login.jsx ---
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page">
      {/* --- Animated Circles --- */}
      <div className="circle pink-circle"></div>
      <div className="circle purple-circle"></div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-circle">🔐</div>

        <h2 className="form-title">SecureVault</h2>
        <p className="form-subtitle">Secure your notes, safely and smartly.</p>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p className="cta-text">
          Don’t have an account?{' '}
          <span className="signup-link">Sign up</span>
        </p>
      </form>
    </div>
  );
}
