import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUser } from '../../context/userContext';

export default function Delete() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const deleteUser = async (e) => {
    e.preventDefault();
    if (user.role !== 'admin') {
      toast.error('You do not have permission to delete users');
      return;
    }

    const { userName, password } = data;
    try {
      const { data } = await axios.delete('/delete', { data: { userName, password } });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('User Deleted');
        navigate('/Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (user.role !== 'admin') {
    return <p>You do not have permission to view this page</p>;
  }

  return (
    <div>
      <Form onSubmit={deleteUser}>
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
          Delete
        </Button>
      </Form>
    </div>
  );
}