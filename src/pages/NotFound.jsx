import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>404 😢</h1>
      <p>Página no encontrada</p>

      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;