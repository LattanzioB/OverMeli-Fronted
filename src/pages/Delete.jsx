import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Delete() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    userName: '',
    password: '',
  })

  const deleteUser = async(e) =>{
    e.preventDefault()
    const {userName, password} = data
    try {
      const {data} = await axios.delete('/delete', {data:{
        userName, password
      }})
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('User Deleted')
        navigate('/Home')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <form from onSubmit={deleteUser}>
        <label>UserName</label>
        <input type='text' placeholder='enter UserName . . .' value={data.userName} onChange={(e)=> setData({...data, userName: e.target.value})}/>
        <label>Password</label>
        <input type='text' placeholder='enter Password . . .'  value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
