import PropTypes from "prop-types";

const Avatar = ({ name }) => {
  const splittedName = name.split(" ");
  const nameInitial = splittedName[0][0];
  const surnameInitial = splittedName[splittedName.length - 1][0];

  return <div>{`${nameInitial}${surnameInitial}`}</div>;
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
