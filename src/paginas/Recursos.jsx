import React, { useState, useEffect, Fragment } from "react";
import { Card, CardBody, CardText, CardTitle, CardDeck, Button } from "reactstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/Recursos.css";
import useRecursos from "../hooks/useRecursos";

const Recursos = () => {
  const {
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
    console.log("Aplicando filtros...");
    console.log("Filtro por nombre:", filtroNombre);
    console.log("Filtro por tipo:", filtroTipo);

    // Filtrar por nombre
    const recursosFiltradosPorNombre = filtrarPorNombre(listadoRecursos, filtroNombre);
    console.log("Recursos filtrados por nombre:", recursosFiltradosPorNombre);

    // Filtrar por tipo sobre los recursos ya filtrados por nombre
    const recursosFiltradosPorTipo = filtrarPorTipo(recursosFiltradosPorNombre, filtroTipo);
    console.log("Recursos filtrados por tipo:", recursosFiltradosPorTipo);

    // Actualizar el estado de recursos filtrados
    setRecursosFiltrados(recursosFiltradosPorTipo);
  }, [listadoRecursos, filtroNombre, filtroTipo, filtrarPorNombre, filtrarPorTipo, setRecursosFiltrados]);

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
            placeholder="Buscar nombre recurso"
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
        </div>
        <div className="filtrarOrdenar">
          <label htmlFor="filtroTipo">Filtrar por tipo:</label>
          <select
            id="filtroTipo"
            value={filtroTipo}
            onChange={(e) => {
              console.log("Nuevo valor seleccionado:", e.target.value);
              setFiltroTipo(e.target.value);
            }}
          >
            <option value="">Todos</option>
            <option value="articulo">Artículo</option>
            <option value="video">Video</option>
            <option value="foro">Foro</option>
          </select>
        </div>
        <div className="opcionesRecursos">
          <Button className="boton2" onClick={ordenarAsc}>Orden ascendente</Button>
          <Button className="boton1" onClick={ordenarDesc}>Orden descendente</Button>
        </div>
        <CardDeck>
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
