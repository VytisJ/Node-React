import PropTypes from "prop-types";
import "./styles.css";

const Product = ({ product, handleDeleteProduct }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>€{product.price}</p>
      <button onClick={handleDeleteProduct}>Ištrinti</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

export default Product;
