import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const { name, surname, age } = user;
  return (
    <div>
      {name} {surname} <strong>{age}</strong> metų.
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default UserCard;
