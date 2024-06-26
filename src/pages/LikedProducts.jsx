import { useEffect, useState } from 'react';
import { productSearchApi } from '../axiosConfig';
import { useUser } from '../../context/userContext';

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
      <ul>
        {likedProducts.map((product) => (
          <li key={product.productId}>
            <strong>Product Name:</strong> {product.productName}<br />
            <strong>Rate:</strong> {product.rate}<br />
            <strong>Comment:</strong> {product.comment}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsLiked;