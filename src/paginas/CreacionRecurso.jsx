import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import CrearRecurso from "../desarrollo/CrearRecurso.jsx";

const CreacionRecurso=()=>{
    return(
      <Fragment>
           <CrearRecurso/>
           <div className="opcionesRecursos">
          <Link to="/recursos">
          <Button className="boton2">Volver a recursos</Button>
          </Link>
          <Link to="/editar-recurso">
            <Button className="boton1">Editar Recurso</Button>
          </Link>
        </div>
       </Fragment>);
    };
   
    export default CreacionRecurso;