import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white", background: "black" }}>
        Failed to find your route!
      </h1>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NoMatch;
