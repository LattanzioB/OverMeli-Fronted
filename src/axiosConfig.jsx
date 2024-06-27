import axios from 'axios';
import { loginApiUrl, meliApiUlr } from './config';

// Default API (e.g., user authentication)
axios.defaults.baseURL = loginApiUrl;
axios.defaults.withCredentials = true;

// Product search API
export const productSearchApi = axios.create({
  baseURL: meliApiUlr,
  withCredentials: true,
});