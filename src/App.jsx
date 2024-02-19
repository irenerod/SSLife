import React, { Fragment } from "react";
import "./App.css";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Principal from "./componentes/estructura/Principal.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import { BrowserRouter } from "react-router-dom";
import ProveedorUsuarios from "./contextos/ProveedorUsuarios.jsx";
//import Login from "./paginas/Login.jsx";

/**
 *  Roles:
 *  rol_cliente = para los autentificados (authentificated). 
 *            - Pueden insertar, editar, borrar y ver sus listas. 
 *            - Pueden ver los productos.
 *            - En mi caso era: irener.rglez@gmail.com
 *  admin = para los administradores.  
 *            - Pueden insertar, editar, borrar y ver los productos.
 *            - Pueden ver y borrar las listas.
 *            - irenerodenas.alu@iespacomolla.es
 *            - pedrosanchezflores.alu@iespacomolla.es
 *            - Contraseñas: 123456
 *  */
function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <ProveedorUsuarios>
        <main>
          <Cabecera />
          <Navegacion />
            <Principal />
          <Pie />
        </main>
      </ProveedorUsuarios>  
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
