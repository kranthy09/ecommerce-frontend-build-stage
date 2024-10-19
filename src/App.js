// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import PlayGround from './pages/PlayGround';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (loginStatus) {
    setLogin(loginStatus);
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/detail" element={<ProductPage />} />
        <Route path="/dev" element={<PlayGround />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/register" element={<Register registerStatus={isLoggedIn}/>} />
        <Route path="/login" element={<Login loginStatus={isLoggedIn}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
