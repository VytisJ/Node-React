import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        height: 400,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <button>{props.buttonText}</button>
    </div>
  );
};

Hero.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Hero;
