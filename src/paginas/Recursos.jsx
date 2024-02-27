import React, { Fragment, useState } from "react"; // Importar useState desde "react"
import { Link } from "react-router-dom"; // Importar Link desde "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "react-bootstrap";
import useRecursos from "../hooks/useRecursos";

const Recursos = () => {
  const { recursos, filtrarNombre, filtrarTipo, ordenarRecursosPorNombreAsc, ordenarRecursosPorNombre, ordenarRecursosPorNombreDesc } = useRecursos();
  const [filtros, setFiltros] = useState({ tipo: "", nombre: "" });
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Función para manejar el cambio en la opción de ordenamiento
 // Función para manejar el cambio en la opción de ordenamiento
const manejarOrdenar = () => {
  if (ordenAscendente) {
    ordenarRecursosPorNombreAsc().then(() => {
      setOrdenAscendente(false); // Cambiar el estado después de que se complete la ordenación ascendente
    }).catch(error => {
      console.error("Error al ordenar recursos ascendente:", error.message);
    });
  } else {
    ordenarRecursosPorNombreDesc().then(() => {
      setOrdenAscendente(true); // Cambiar el estado después de que se complete la ordenación descendente
    }).catch(error => {
      console.error("Error al ordenar recursos descendente:", error.message);
    });
  }
};


  // Aplicar filtros
  let recursosFiltrados = recursos;
  if (filtros.tipo) {
    recursosFiltrados = filtrarTipo(recursosFiltrados, filtros.tipo);
  }
  if (filtros.nombre) {
    recursosFiltrados = filtrarNombre(recursosFiltrados, filtros.nombre);
  }

  return (
    <Fragment>
      <div className="contenedor">
        <h1>Recursos</h1>
        <Link to="/crear-recurso"><Button variant="light">Añadir Recurso</Button></Link>
        <div>
          {/* Controles para filtrar y ordenar */}
          <fieldset>
            <legend>Filtrar y Ordenar</legend>
            <div>
              <label htmlFor="tipo">Filtrar por tipo:</label>
              <select id="tipo" value={filtros.tipo} onChange={e => setFiltros({ ...filtros, tipo: e.target.value })}>
                <option value="">Todos</option>
                <option value="video">Vídeos</option>
                <option value="articulo">Artículos</option>
                <option value="foro">Foros</option>
              </select>
            </div>
            <div>
              <label htmlFor="nombre">Filtrar por nombre:</label>
              <input type="text" id="nombre" value={filtros.nombre} onChange={e => setFiltros({ ...filtros, nombre: e.target.value })} />
            </div>
            <div>
              <label>Ordenar por nombre:</label>
              <Button variant="light" onClick={manejarOrdenar}>{ordenAscendente ? "Ascendente" : "Descendente"}</Button>
            </div>
          </fieldset>
        </div>
        <div className="opciones-contenedor">
          {/* Lista de recursos */}
          {recursosFiltrados.map(recurso => (
            <Card key={recurso.id}>
              <CardBody>
                <CardTitle>{recurso.nombre}</CardTitle>
                <CardSubtitle>{recurso.tipo}</CardSubtitle>
                <CardText>{recurso.descripcion}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Recursos;



