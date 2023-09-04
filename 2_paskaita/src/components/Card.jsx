import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} />
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
