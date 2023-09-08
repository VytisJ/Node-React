import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    setUser(user);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#eeeeee",
        margin: 24,
        borderRadius: 5,
      }}
    >
      <div>
        <label>Email</label>
        <br />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ margin: "16px 0" }}>
        <label>Password</label>
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
