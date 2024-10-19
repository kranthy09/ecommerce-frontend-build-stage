// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userService';

const Login = ({ loginStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.status === 200) {
        // Store the JWT token in local storage for later use
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        localStorage.setItem('isLoggedIn', true);

        // Redirect to profile page or home page
        navigate('/');
      }
    } catch (error) {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      {loginStatus && <div><h3>Already logged in!, please profile</h3><button onClick={() => navigate('/profile')}>Profile</button></div>}
      {loginStatus && <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '400px',
    margin: '2rem auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '1rem',
    color: 'red',
  },
};

export default Login;
