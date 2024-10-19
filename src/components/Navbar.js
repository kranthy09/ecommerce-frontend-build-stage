// src/components/Navbar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.brand}>
        E-Shop
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/products" style={styles.link}>
          Products
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart
        </Link>
        <Link className="register-link" to="/register" style={styles.link} >
          Register
        </Link>
        <Link className="login-link" to="/login" style={styles.link} >
          Login
        </Link>
        <Link className="profile-link" to="/profile" style={styles.link}>
          Profile
        </Link>

      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  brand: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#fff',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Navbar;
