import axios from 'axios';

// Default API (e.g., user authentication)
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

// Product search API
export const productSearchApi = axios.create({
  baseURL: 'http://localhost:8010',
  withCredentials: true,
});