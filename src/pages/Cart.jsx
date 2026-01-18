import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart, total } = useCart();

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <table className="table mt-4 align-middle">
          <thead>
            <tr className="align-middle">
              <th className="ps-4">Pizza</th>
              <th>Tipo de Pizza</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map((pizza) => (
              <tr key={pizza.id}>
                {/* 🖼️ IMAGEN */}
                <td>
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </td>

                <td>{pizza.name}</td>
                <td>${pizza.price.toLocaleString("es-CL")}</td>

                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => updateQty(pizza.id, -1)}
                  >
                    -
                  </button>

                  {pizza.qty}

                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => updateQty(pizza.id, 1)}
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* TOTAL */}
      <h4 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h4>
    </div>
  );
};

export default Cart;