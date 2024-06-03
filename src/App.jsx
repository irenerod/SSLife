import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./componentes/estructura/Navegacion.jsx";
import Principal from "./componentes/estructura/Principal.jsx";
import Footer from "./componentes/estructura/Footer.jsx"
import ProveedorRecursos from "./contextos/ProveedorRecursos";
import ProveedorProfesionales from "./contextos/ProveedorProfesionales.jsx";
import ProveedorUsuarios from "./contextos/ProveedorUsuarios.jsx";
import "./App.css";

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
          <Navegacion />
          
          <ProveedorProfesionales>
            <ProveedorRecursos>
              <Principal/>
              
            </ProveedorRecursos>
          </ProveedorProfesionales>
        
          <Footer />
        </main>
      </ProveedorUsuarios>  
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
