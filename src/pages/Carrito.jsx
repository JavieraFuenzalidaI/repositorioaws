import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/molecules/CartItem";

const Carrito = () => {
  const { carrito, removeFromCart, updateQuantity, total } = useCart(); // ✅ cambiar cart → carrito

  if (carrito.length === 0) return <p>Tu carrito está vacío 🛒</p>;

  return (
    <div className="carrito-contenedor">
<<<<<<< HEAD:src/pages/Carrito.jsx
      {cart.map(item => (
=======
      {carrito.map((item) => (
>>>>>>> d058065 (terminando de migrar la logica y escalando el proyecto para agregar nuevas funcionalidades como oferta, categorias, y mejoras en el dashboard como boletas, reportes, productos criticos etc):src/pages/public/Carrito.jsx
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => removeFromCart(item.id)}
          onUpdate={(cantidad) => updateQuantity(item.id, cantidad)}
        />
      ))}
      <h3 id="carrito-total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Carrito;
