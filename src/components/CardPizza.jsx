import React from "react";
import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card pizza-card shadow-sm h-100">
      <img src={img} className="card-img-top pizza-img" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>

        <p className="text-muted mb-1">Ingredientes:</p>

        <p className="text-secondary">
          🍕 {ingredients.join(", ")}
        </p>

        {/* Precio con formato chileno */}
        <h6 className="fw-bold mt-3">
          Precio: ${price.toLocaleString("es-CL")}
        </h6>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <button className="btn btn-outline-dark btn-sm">
            Ver Más 👁️
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;