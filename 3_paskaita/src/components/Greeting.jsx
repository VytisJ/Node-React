import PropTypes from "prop-types";

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Hello Rokas, How are you today?</div>;
  }
  return <div>Hello Guest, You need to login first.</div>;
};

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Greeting;
