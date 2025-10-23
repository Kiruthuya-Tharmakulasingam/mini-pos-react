import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>

        <nav>
          <Link to="/users">
            Users
          </Link>
          <Link to="/sales">
            Sales
          </Link>
          <Link to="/items">
            Items
          </Link>
          <Link to="/customers">
            Customers
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
