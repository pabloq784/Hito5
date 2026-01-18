import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const token = false;
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
      <div className="d-flex gap-2 align-items-center">
        <h2 className="text-light m-0">Pizzeria Mamma Mia!</h2>

        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-outline-light">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <Link to="/cart" className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;