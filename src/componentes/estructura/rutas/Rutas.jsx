import React, { Fragment, useParams } from "react";
import { Routes, Route} from "react-router-dom";
import Inicio from "../../../paginas/Inicio.jsx";
import Error from "../../../paginas/Error.jsx";
import Login from "../../../paginas/Login.jsx";
import Bienvenida from "../../../paginas/Bienvenida.jsx";
import Recursos from "../../../paginas/Recursos.jsx";
import CreacionRecurso from "../../../paginas/CreacionRecurso.jsx";
import EdicionRecurso from "../../../paginas/EdicionRecurso.jsx";

const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Bienvenida />} /> {/** Por alguna razón te redirige aquí sin control... */}
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recursos' element={<Recursos />} />
        <Route path='/crear-recurso' element={<CreacionRecurso />} />
        <Route path='/editar-recurso' element={<EdicionRecurso />} />
      </Routes>
    </Fragment>
  );
};

export default Rutas;
