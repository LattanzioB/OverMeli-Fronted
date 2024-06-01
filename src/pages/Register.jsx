import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    userName: '',
    password: '',
  })

  const registerUser = async(e) =>{
    e.preventDefault()
    const {userName, password} = data
    try {
      const {data} = await axios.post('/register', {
        userName, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Register Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <Form onSubmit={registerUser}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter UserName . . ." 
            value={data.userName} 
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter Password . . ." 
            value={data.password} 
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
