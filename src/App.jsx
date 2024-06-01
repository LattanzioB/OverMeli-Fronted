import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Delete from './pages/Delete'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';



axios.defaults.baseURL = 'http://localhost:8000'//'http://host.docker.internal:8000';
axios.defaults.withCredentials = true;


function App() {
 
  return (
    <UserContextProvider>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </UserContextProvider>
  )
}

export default App
