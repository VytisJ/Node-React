import PropTypes from "prop-types";

// {
//     "id": 1,
//     "title": "Vintage Wooden Chair",
//     "description": "A beautifully crafted vintage wooden chair in great condition. Perfect for any room setting.",
//     "imageUrl": "https://i.etsystatic.com/6130739/r/il/29548f/2960236785/il_fullxfull.2960236785_in4n.jpg",
//     "price": 50,
//     "userId": 1694710338964
//   },

const Ad = ({ ad }) => {
  const { title, description, image_url, price } = ad;
  return (
    <div>
      <img src={image_url} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

Ad.propTypes = {
  ad: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Ad;
