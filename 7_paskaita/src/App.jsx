import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
