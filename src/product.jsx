import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';  
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Product(props) {
   
  return (
    <div>
      <Card >
      <Card.Img variant="top" src={props.productData.image} />
      <Card.Body>
       <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>
          ${props.productData.price}
        </Card.Text>
        <Link to={`/product-details/${props.productData.id}`}><Button className='button2'variant="warning">View</Button></Link>
      <Button variant="primary">Add to Cart</Button>
      <Button className='button2'variant="warning">Buy</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
Product.propTypes = {
    productData: PropTypes.shape({
        image: PropTypes.string.isRequired,  // Validating img as required string
        title: PropTypes.string.isRequired,  // Validating title as required string
        price: PropTypes.number.isRequired,  // Validating price as required string
       id:PropTypes.number.isRequired,
}) .isRequired
};
export default Product