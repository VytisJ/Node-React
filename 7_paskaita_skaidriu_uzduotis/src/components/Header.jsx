import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 48,
      }}
    >
      <img
        src="https://logosbynick.com/wp-content/uploads/2018/03/final-logo-example.png"
        alt="logo"
        width={200}
      />
      <nav>
        <Link to="/">Pagrindinis</Link>
        {/* <Link to="/">Apie mus</Link> */}
        {/* <Link to="/">Naujienos</Link> */}
        {/* <Link to="/">Paslaugos</Link> */}
        {/* <Link to="/">Atlikti darbai</Link> */}
        <Link to="/kontaktai">Kontaktai</Link>
      </nav>
    </header>
  );
};

export default Header;
