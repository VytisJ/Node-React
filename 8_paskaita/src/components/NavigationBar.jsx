import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <nav style={{ display: "flex", gap: 16 }}>
        <Link to="/">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
