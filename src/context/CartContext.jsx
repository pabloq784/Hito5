import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ agregar producto
  const addToCart = (pizza) => {
    const existingPizza = cart.find((p) => p.id === pizza.id);

    if (existingPizza) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, qty: 1 }]);
    }
  };

  // ➖ quitar producto
  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  // ➕➖ modificar cantidad
  const updateQty = (id, amount) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + amount) } : p
      )
    );
  };

  // 💰 total
  const total = cart.reduce(
    (sum, p) => sum + p.price * p.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, total }}
    >
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => useContext(CartContext);