import PropTypes from "prop-types";

const ColorBox = ({ color }) => {
  if (color === "red") {
    return (
      <div style={{ backgroundColor: color, height: 40, width: 40 }}>
        Color is Red
      </div>
    );
  } else if (color === "blue") {
    return (
      <div style={{ backgroundColor: color, height: 60, width: 60 }}>
        Color is Blue
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: color, height: 80, width: 80 }}>
        Color is Yellow
      </div>
    );
  }
};

ColorBox.propTypes = {
  color: PropTypes.oneOf(["red", "blue", "yellow"]),
};

export default ColorBox;
