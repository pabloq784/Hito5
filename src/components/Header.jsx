import headerImg from "../assets/header.jpg";

const Header = () => {
  return (
    <header
      className="header-banner d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <h1 className="fw-bold display-5">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5 mt-2">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;