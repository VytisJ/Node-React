import PropTypes from "prop-types";

// ? : - if else
// && - if

const AdultChecker = ({ age }) => {
  return (
    <div>Your drink is {age >= 20 ? <strong>Beer</strong> : <i>Milk</i>}</div>
  );
};

AdultChecker.propTypes = {
  age: PropTypes.number.isRequired,
};

export default AdultChecker;
