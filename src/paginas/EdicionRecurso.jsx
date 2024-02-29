import React, { Fragment } from "react";
import "../estilos/Edicion.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import EditarRecurso from "../desarrollo/EditarRecurso.jsx";

const EdicionRecurso=()=>{
    return(
      <Fragment>
           <EditarRecurso/>
           <div className="opcionesRecursos">
          <Link to="/recursos">
            <Button className="boton2">Volver a recursos</Button>
          </Link>
          <Link to="/crear-recurso">
            <Button className="boton1">Crear Recurso</Button>
          </Link>
        </div>
       </Fragment>);
    };
   
export default EdicionRecurso;