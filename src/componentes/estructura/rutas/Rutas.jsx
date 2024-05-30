import React, { Fragment, useParams } from "react";
import { Routes, Route} from "react-router-dom";
import Inicio from "../../../paginas/Inicio.jsx";
import Error from "../../../paginas/Error.jsx";
import Login from "../../../paginas/Login.jsx";
import Bienvenida from "../../../paginas/Bienvenida.jsx";
import Recursos from "../../../paginas/Recursos.jsx";
import CreacionRecurso from "../../../paginas/CreacionRecurso.jsx";
import EdicionRecurso from "../../../paginas/EdicionRecurso.jsx";
import SobreSSLife from "../../../paginas/SobreSSLife.jsx";
import Contacto from "../../../paginas/Contacto.jsx";
import Informacionfooter from "../../../paginas/Informacionfooter.jsx";
import PreguntasFrecuentes from "../../../paginas/PreguntasFrecuentesfooter.jsx";
import Sintomasfooter from "../../../paginas/Sintomasfooter.jsx";
import Ps_Team from "../../Ps_Team.jsx";
import PoliticaPrivacidad from "../../PoliticaPrivacidad.jsx"
import PoliticaCookies from "../../PoliticaCookies.jsx"
import AvisoLegal from "../../AvisoLegal.jsx"

const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Bienvenida />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recursos' element={<Recursos />} />
        <Route path='/crear-recurso' element={<CreacionRecurso />} />
        <Route path='/editar-recurso' element={<EdicionRecurso />} />
        <Route path='/inicio-sesion' element={<Login />} />
        <Route path='/sobre' element={<SobreSSLife />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/info' element={<Informacionfooter />} />
        <Route path='/faqs' element={<PreguntasFrecuentes />} />
        <Route path='/que-me-sucede' element={<Sintomasfooter />} />
        <Route path='/profesionales' element={<Ps_Team />} />
        <Route path='/privacy-policy' element={<PoliticaPrivacidad />} />
        <Route path='/privacy-Cookies' element={<PoliticaCookies />} />
        <Route path='/avisoLegal' element={<AvisoLegal />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Fragment>
  );
};

export default Rutas;