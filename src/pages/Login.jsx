import {useState} from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    userName: '',
    password: '',
  })

  const loginUser = async (e) =>{
    e.preventDefault()
     const {userName, password} = data
     try {
      const {data} = await axios.post('/login',
      {
        userName: userName,
        password: password
      });
      if(!!data.error){
        toast.error(data.error)
      }else{
        setData({
          userName: '',
          password: '',
        });
        navigate('/');
      }
     } catch (error) {
      console.log(error)
     }
     
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>UserName</label>
        <input type='text' placeholder='enter UserName . . .' value={data.userName} onChange={(e)=> setData({...data, userName: e.target.value})}/>
        <label>Password</label>
        <input type='text' placeholder='enter Password . . .' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
