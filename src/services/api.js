// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';  // Django's local URL



export const getProducts = async () => {
  return axios.get(`${API_URL}products/`);
};

export const getProduct = async (id) => {
  return axios.get(`${API_URL}products/${id}/`);
};

export const getCategoryProducts = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json',};
  return axios.get(`${API_URL}category-products/`, {headers: headers});
}