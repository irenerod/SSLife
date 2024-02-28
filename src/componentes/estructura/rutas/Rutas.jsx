import React, { Fragment, useParams } from "react";
import { Routes, Route} from "react-router-dom";
import Inicio from "../../../paginas/Inicio.jsx";
import Error from "../../../paginas/Error.jsx";
import Login from "../../../paginas/Login.jsx";
import Bienvenida from "../../../paginas/Bienvenida.jsx";
import Recursos from "../../../paginas/Recursos.jsx";
//import SobreSSLife from "../../../paginas/SobreSSLife.jsx";
//import Contacto from "../../../paginas/Contacto.jsx";
import CreacionRecurso from "../../../paginas/CreacionRecurso.jsx";

const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Bienvenida />} />
        <Route path='inicio' element={<Inicio />} />
        <Route path='login' element={<Login />} />
        <Route path='recursos' element={<Recursos />} />
        <Route path='/crear-recurso' element={<CreacionRecurso />} />
        {/**
        <Route path='sobre' element={<SobreSSLife />} />
        <Route path='contacto' element={<Contacto />} />
         */}    
      </Routes>
    </Fragment>
  );
};

export default Rutas;
