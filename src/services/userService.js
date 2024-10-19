// src/services/userService.js

import axios from 'axios';

// Define the base URL of your Django API
const API_URL = 'http://127.0.0.1:8000/api/';

// Register a new user
const registerUser = (username, email, password) => {
  return axios.post(`${API_URL}register/`, {
    username,
    email,
    password,
  });
};

// Login user and get JWT tokens
const loginUser = (username, password) => {
  return axios.post(`${API_URL}login/`, {
    username,
    password,
  });
};

// Get user profile information (requires JWT token)
const getUserProfile = (accessToken) => {
  return axios.get(`${API_URL}profile/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// Export the functions for use in other components
export { registerUser, loginUser, getUserProfile };
