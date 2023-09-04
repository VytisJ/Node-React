import * as React from "react";
import PropTypes from "prop-types";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Welcome.propTypes = {
  name: PropTypes.string,
};

export default Welcome;
