import { useState } from 'react';
import { productSearchApi } from '../axiosConfig';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import './ProductSearch.css'; // Import your CSS file here
import { useUser } from '../../context/userContext';
import RatingFormModal from '../components/RatingFormModal'; // Import the modal component

export default function ProductSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user } = useUser();

  const searchProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await productSearchApi.get('/searchProduct', {
        params: { query }
      });
      const productsArray = Object.values(response.data);
      setResults(productsArray);
    } catch (error) {
      console.error('Error searching for products:', error);
      toast.error('Failed to search for products');
    }
  };

  const handleHeartClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div>
      <Form onSubmit={searchProduct}>
        <Form.Group className="mb-3" controlId="formSearchQuery">
          <Form.Label>Search for Products</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <Row className="mt-4">
        {results.map((product) => (
          <Col key={product.productId} md={4} className="mb-4">
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>
                  {product.productName}
                </Card.Title>
                <Carousel>
                  {product.pictures.map((picture) => (
                    <Carousel.Item key={picture.id}>
                      <img
                        className="d-block w-100"
                        src={picture.url}
                        alt={product.productName}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Text>
                  <strong>Condition:</strong> {product.condition}<br/>
                  <strong>Price:</strong> ${product.price}
                  <FaHeart 
                    className="ml-2 heart-icon" 
                    onClick={() => handleHeartClick(product)} 
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && user && (
        <RatingFormModal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          product={selectedProduct} 
          user={user.userName} 
        />
      )}
    </div>
  );
}