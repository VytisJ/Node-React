import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about-us">About us</Link>
    </nav>
  );
};

export default NavigationBar;
