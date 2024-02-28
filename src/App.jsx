import React, { Fragment } from "react";
import "./App.css";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Principal from "./componentes/estructura/Principal.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import { BrowserRouter } from "react-router-dom";
//import Caelestis from "./componentes/Caelestis/Caelestis.jsx";
import ProveedorRecursos from "./contextos/ProveedorRecursos";
import ProveedorProfesionales from "./contextos/ProveedorProfesionales.jsx";
import ProveedorUsuarios from "./contextos/ProveedorUsuarios.jsx";
//import Login from "./paginas/Login.jsx";

/**
 *  Roles:
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
          <ProveedorProfesionales>
            <ProveedorRecursos>
              <Principal />
            </ProveedorRecursos>
          </ProveedorProfesionales>
          <Pie />
        </main>
      </ProveedorUsuarios>  
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
