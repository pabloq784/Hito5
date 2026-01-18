import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="container mt-5">
      <h2>Carrito 🛒</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((p) => (
            <div
              key={p.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <strong>{p.name}</strong>

              <div>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => updateQty(p.id, -1)}
                >
                  -
                </button>

                <span className="mx-2">{p.qty}</span>

                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => updateQty(p.id, 1)}
                >
                  +
                </button>
              </div>

              <span>
                ${(p.price * p.qty).toLocaleString("es-CL")}
              </span>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(p.id)}
              >
                ❌
              </button>
            </div>
          ))}

          <h4 className="mt-4">
            Total: ${total.toLocaleString("es-CL")}
          </h4>
        </>
      )}
    </div>
  );
};

export default Cart;