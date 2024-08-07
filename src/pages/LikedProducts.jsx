import { useEffect, useState } from 'react';
import { productSearchApi } from '../axiosConfig';
import { useUser } from '../../context/userContext';
import Table from 'react-bootstrap/Table';

const ProductsLiked = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        var response;
        if (user && user.role === 'admin') {
          response = await productSearchApi.get('/productsLikedBy', { params: { user: 'all' } });
        } else if (user) {
          response = await productSearchApi.get('/productsLikedBy', { params: { user: user.userName } });
        }
        setLikedProducts(response.data);
      } catch (error) {
        console.error('Error fetching liked products:', error);
        // Handle error state if needed
      }
    };

    fetchLikedProducts();
  }, [user]);

  return (
    <div>
      <h2>Products Liked By Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Product Name</th>
            <th>Rate</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {likedProducts.map((product) => (
            <tr key={product.productId}>
              <td>{product.userName}</td>
              <td>{product.productName}</td>
              <td>{product.rate}</td>
              <td>{product.comment}</td>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
  );
};

export default ProductsLiked;