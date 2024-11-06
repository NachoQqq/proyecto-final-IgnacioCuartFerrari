import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/authService';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await loginUser(email, password);
      } else {
        await registerUser(email, password);
      }
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAuth(); }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;