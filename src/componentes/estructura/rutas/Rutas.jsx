import React, { Fragment, useParams } from "react";
import { Routes, Route} from "react-router-dom";
import Inicio from "../../../paginas/Inicio.jsx";
import Error from "../../../paginas/Error.jsx";
import Login from "../../../paginas/Login.jsx"
const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='inicio' element={<Inicio />} />
        <Route path='login' element={<Login />} />
        {/**
        <Route path='sobre' element={<SobreSSLife />} />
        <Route path='recursos' element={<Recursos />} />
        <Route path='contacto' element={<Contacto />} />

         */}
      </Routes>
    </Fragment>
  );
};

export default Rutas;
