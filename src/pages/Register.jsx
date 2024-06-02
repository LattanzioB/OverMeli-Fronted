import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUser } from '../../context/userContext';


export default function Register() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [data, setData] = useState({
    userName: '',
    password: '',
    role: 'user' // default role
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { userName, password, role } = data;
    try {
      const { data } = await axios.post('/register', {
        userName, password, role
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ userName: '', password: '', role: 'user' });
        toast.success('Register Successful. Welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        {user && user.role === 'admin' && (
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}