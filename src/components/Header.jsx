import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header  style={style.container}>
        <div style={style.logo}>
          <Link to="/" style={style.linkTitle}>
            <h1>Home</h1>
          </Link>
        </div>

        <nav  style={style.nav}>
          <Link to="/users" style={style.navLink}>
            Users
          </Link>
          <Link to="/sales" style={style.navLink}>
            Sales
          </Link>
          <Link to="/items" style={style.navLink}>
            Items
          </Link>
          <Link to="/customers" style={style.navLink}>
            Customers
          </Link>
        </nav>
      </header>
    </>
  );
}

const style = {
  container: {
    backgroundColor: "#7e207eff",
    height: "60px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  linkTitle: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
    fontSize: "18px",
  },
};

export default Header;
