import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Delete from './pages/Delete'
import ProductSearch from './pages/Search'
import ProductsLiked from './pages/LikedProducts'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginApiUrl } from '../config';

axios.defaults.baseURL = loginApiUrl//'http://localhost:8000'//'http://host.docker.internal:8000';
axios.defaults.withCredentials = true;


function App() {
 
  return (
    <UserContextProvider>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/likes" element={<ProductsLiked />} />
    </Routes>
    </UserContextProvider>
  )
}

export default App
