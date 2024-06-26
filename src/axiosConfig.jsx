import axios from 'axios';
import { loginApiUrl } from '../config';

// Default API (e.g., user authentication)
axios.defaults.baseURL = loginApiUrl;
axios.defaults.withCredentials = true;

// Product search API
export const productSearchApi = axios.create({
  baseURL: 'http://localhost:8010',
  withCredentials: true,
});