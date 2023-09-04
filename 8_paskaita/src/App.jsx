import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Post from "./pages/Post";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:id" element={<User />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
};

export default App;
