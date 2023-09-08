import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import RegisterForm from "./RegisterForm";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRoutes;
