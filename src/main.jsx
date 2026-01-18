import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // <--- IMPORTANTE
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>       {/* <--- NECESARIO PARA QUE FUNCIONEN LAS RUTAS */}
     <CartProvider>
      <App />
     </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);