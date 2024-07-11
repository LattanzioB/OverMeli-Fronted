import { useEffect, useState } from 'react';
import { productSearchApi } from '../axiosConfig';

const ProductsLikedAvg = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productSearchApi.get('/productsLikedAVG');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products with average ratings:', error);
        // Handle error state if needed
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products with Average Ratings</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Average Rate</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsLikedAvg;