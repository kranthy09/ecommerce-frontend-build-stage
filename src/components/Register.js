// src/components/Register.js

import React, { useState } from 'react';
import { registerUser } from '../services/userService';
import { Link } from 'react-router-dom';

const Register = ({registerStatus}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  console.log(registerStatus);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, email, password);
      if (response.status === 201) {
        setMessage('User registered successfully. Please login.');
      }
    } catch (error) {
      setMessage('Failed to register. Try again later.');
    }
  };

  return (
    <div style={styles.container}>
      {registerStatus && <div><h3>Already registered!, please login</h3><Link to="/login"><button>Login</button></Link></div>}
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={styles.form}>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Register
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
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
    color: 'green',
  },
};

export default Register;
