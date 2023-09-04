import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Pagrindinis
      </Route>
      <Route path="/apie-mus" element={<AboutUs />}>
        Apie mus
      </Route>
      {/* <Route path='/naujienos' element={}>Naujienos</Route> 
      {/* <Route path='/paslaugos' element={}>Paslaugos</Route> */}
      {/* <Route path='/atlikti-darbai' element={}>Atlikti darbai</Route> */}
      <Route path="/kontaktai" element={<Contacts />}>
        Kontaktai
      </Route>
    </Routes>
  );
};

export default App;
