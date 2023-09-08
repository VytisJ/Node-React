import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const Topbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ textAlign: "right" }}>
      Hello {(user && user.email) || "Guest"}
    </div>
  );
};

export default Topbar;
