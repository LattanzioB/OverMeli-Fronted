import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUser } from '../../context/userContext';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { userName, password } = data;
    try {
      const { data: response } = await axios.post('/login', {
        userName,
        password
      });
      if (response.error) {
        toast.error(response.error);
      } else {
        setData({
          userName: '',
          password: '',
        });
        setUser(response); // Store user data in context
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={loginUser}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}