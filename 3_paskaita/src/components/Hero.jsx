import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
