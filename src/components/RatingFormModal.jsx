import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { productSearchApi } from '../axiosConfig';

const RatingFormModal = ({ show, onHide, product, user }) => {
  const [rate, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const productId = product.productId;
  const productName = product.productName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productSearchApi.post('/register_user_product', {
        user,
        productId,
        productName,
        rate,
        comment,
      });
      toast.success('Rating submitted successfully');
      onHide();
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast.error('Failed to submit rating', error);
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Rate Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={user} readOnly />
          </Form.Group>
          <Form.Group controlId="formProductID">
            <Form.Label>Product ID</Form.Label>
            <Form.Control type="text" value={productId} readOnly />
          </Form.Group>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" value={productName} readOnly />
          </Form.Group>
          <Form.Group controlId="formRating">
            <Form.Label>Rate</Form.Label>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  className="star"
                  color={value <= rate ? "gold" : "grey"}
                  onClick={() => handleRatingChange(value)}
                />
              ))}
            </div>
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

RatingFormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

export default RatingFormModal;