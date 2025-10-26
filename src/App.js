import React from "react";
import { CartProvider } from "./context/CartContext";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <CartProvider>
      <Carrito />
    </CartProvider>
  );
}

export default App;
