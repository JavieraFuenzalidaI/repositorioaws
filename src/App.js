<<<<<<< HEAD
import React from "react";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import Productos from "./pages/public/Productos";
import DetalleProducto from "./pages/public/DetalleProducto";
import Registro from "./pages/public/Registro";
import Login from "./pages/public/Login";
import Nosotros from "./pages/public/Nosotros";
import Contacto from "./pages/public/Contacto";
import Carrito from "./pages/public/Carrito";
import Blogs from "./pages/public/Blogs";

// 🧩 Admin
import PanelAdmin from "./pages/admin/PanelAdmin";
import PanelProductos from "./pages/admin/PanelProductos";
import PanelUsuarios from "./pages/admin/PanelUsuarios";
import MostrarProductos from "./pages/admin/MostrarProductos";
import MostrarUsuarios from "./pages/admin/MostrarUsuarios";
import NuevoProducto from "./pages/admin/NuevoProducto";
import NuevoUsuario from "./pages/admin/NuevoUsuario";
import EditarProducto from "./pages/admin/EditarProducto";
import EditarUsuario from "./pages/admin/EditarUsuario";

>>>>>>> d058065 (terminando de migrar la logica y escalando el proyecto para agregar nuevas funcionalidades como oferta, categorias, y mejoras en el dashboard como boletas, reportes, productos criticos etc)
import { CartProvider } from "./context/CartContext";
import Carrito from "./pages/Carrito";

function App() {
  return (
<<<<<<< HEAD
    <CartProvider>
      <Carrito />
    </CartProvider>
=======
    <Router>
      <UsersProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              {/* 🏠 Rutas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/blogs" element={<Blogs />} />

              {/* ⚙️ Rutas Admin */}
              <Route path="/admin" element={<PanelAdmin />} />
              <Route path="/admin/PanelProductos" element={<PanelProductos />} />
              <Route path="/admin/PanelUsuarios" element={<PanelUsuarios />} />

              {/* Subsecciones Admin */}
              <Route path="/admin/MostrarProductos" element={<MostrarProductos />} />
              <Route path="/admin/MostrarUsuarios" element={<MostrarUsuarios />} />
              <Route path="/admin/NuevoProducto" element={<NuevoProducto />} />
              <Route path="/admin/NuevoUsuario" element={<NuevoUsuario />} />
              <Route path="/admin/EditarProducto/:id" element={<EditarProducto />} />
              <Route path="/admin/EditarUsuario/:id" element={<EditarUsuario />} />
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </UsersProvider>
    </Router>
>>>>>>> d058065 (terminando de migrar la logica y escalando el proyecto para agregar nuevas funcionalidades como oferta, categorias, y mejoras en el dashboard como boletas, reportes, productos criticos etc)
  );
}

export default App;
