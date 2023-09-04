import PropTypes from "prop-types"; // 1. importuojam prop-types biblioteka

const FuncButton = (props) => {
  return <button>{props.title}</button>;
};

// KomponentoPavadinimas.propTypes - propTypes iš mažosios raidės
FuncButton.propTypes = {
  // išvardinam visus savo props ir priskiriam jiem tipus
  title: PropTypes.string,
};

export default FuncButton;
