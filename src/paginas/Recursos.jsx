import React, { useState, useEffect, Fragment } from "react";
import { Card, CardBody, CardText, CardTitle, CardGroup, Button, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/Recursos.css";
import useRecursos from "../hooks/useRecursos";

const Recursos = () => {
  const {
    recurso,
    listadoRecursos,
    filtroNombre,
    filtroTipo,
    filtrarPorNombre,
    filtrarPorTipo,
    ordenarNombreAsc,
    ordenarNombreDesc,
    setFiltroNombre,
    setFiltroTipo,
    recursosFiltrados,
    setRecursosFiltrados
  } = useRecursos();

  useEffect(() => {
    const recursosFiltradosPorNombre = filtrarPorNombre(listadoRecursos, filtroNombre);
    const recursosFiltradosPorTipo = filtrarPorTipo(listadoRecursos, filtroTipo);
    setRecursosFiltrados(recursosFiltradosPorTipo);
  }, [listadoRecursos, filtroNombre, filtroTipo]);

  const ordenarAsc = async () => {
    const recursosOrdenados = await ordenarNombreAsc();
    setRecursosFiltrados([...recursosOrdenados]);
  };
  
  const ordenarDesc = async () => {
    const recursosOrdenados = await ordenarNombreDesc();
    setRecursosFiltrados([...recursosOrdenados]); 
  };

  return (
    <Fragment>
    <div>
      <h2>Listado de Recursos</h2>
      <div className="filtrarOrdenar">
        <label htmlFor="filtroNombre">Filtrar por nombre:</label>
        <input
          type="text"
          id="filtroNombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </div>
      <div className="filtrarOrdenar">
        <label htmlFor="filtroTipo">Filtrar por tipo:</label>
        <select
        id="filtroTipo"
        defaultValue={filtroTipo} // Cambio aquí de value a defaultValue para que coja el valor del select.
        onChange={(e) => {
            console.log("Nuevo valor seleccionado:", e.target.value); // Agregado para verificar el nuevo valor seleccionado.
            setFiltroTipo(e.target.value);
        }}
    >
        <option value="">Todos</option>
        <option value="articulo">Articulo</option>
        <option value="video">Video</option>
        <option value="foro">Foro</option>
    </select>

      </div>
      <div className="opcionesRecursos">
        <Button className="boton2" onClick={ordenarAsc}>Orden ascendente</Button>
        <Button className="boton1" onClick={ordenarDesc}>Orden descendente</Button>
      </div>
      <CardDeck> {/*CardGroup */}
        {recursosFiltrados.map((recurso) => (
          <Card key={recurso.id_recurso}>
            <CardBody>
            <img src={recurso.imagen} alt="imagen-recurso" width="200px" height="125px" />
              <CardTitle>{recurso.nombre_recurso}</CardTitle>
              <CardText>Tipo: {recurso.tipo}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>
     <div className="opcionesRecursos">
     <Link to="/crear-recurso">
       <Button className="boton2">Crear Recurso</Button>
     </Link>
     <Link to="/editar-recurso">
       <Button className="boton1">Editar Recurso</Button>
     </Link>
   </div>
   </Fragment>
  );
};

export default Recursos;


