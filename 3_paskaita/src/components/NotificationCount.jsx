import PropTypes from "prop-types";

// && - if

const NotificationCount = ({ count }) => {
  return (
    <div>
      {count > 99 ? "+99" : count}{" "}
      {count > 99 && (
        <strong>
          You have a lot of notifications. Maybe you want to clear them?{" "}
        </strong>
      )}
    </div>
  );
};

NotificationCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default NotificationCount;
