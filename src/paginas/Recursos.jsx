import React, { useState, useEffect } from "react";
import { Card, CardBody, CardText, CardTitle, CardGroup, Button, CardDeck } from "reactstrap";
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
    setFiltroTipo
  } = useRecursos();

  const [recursosFiltrados, setRecursosFiltrados] = useState([]);

  useEffect(() => {
    let recursosFiltradosTemp = listadoRecursos;
    recursosFiltradosTemp = filtrarPorNombre(recursosFiltradosTemp, filtroNombre);
    recursosFiltradosTemp = filtrarPorTipo(recursosFiltradosTemp, filtroTipo);
    setRecursosFiltrados(recursosFiltradosTemp);
  }, [listadoRecursos, filtroNombre, filtroTipo]);

  const handleOrdenarAscendente = async () => {
    const recursosOrdenados = await ordenarNombreAsc();
    setRecursosFiltrados(recursosOrdenados);
  };

  const handleOrdenarDescendente = async () => {
    const recursosOrdenados = await ordenarNombreDesc();
    setRecursosFiltrados(recursosOrdenados);
  };

  return (
    <div>
      <div className="opcionesRecursos">
        <Link to="/crear-recurso">
          <Button color="light">Crear Recurso</Button>
        </Link>
        <Link to="/editar-recurso">
          <Button color="light">Editar Recurso</Button>
        </Link>
      </div>
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
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="articulo">Articulo</option>
          <option value="video">Video</option>
          <option value="foro">Foro</option>
        </select>
      </div>
      <div>
        <Button color="light" onClick={handleOrdenarAscendente}>Orden ascendente</Button>
        <Button color="light" onClick={handleOrdenarDescendente}>Orden descendente</Button>
      </div>
      <CardDeck> {/*CardGroup */}
        {recursosFiltrados.map((recurso) => (
          <Card key={recurso.id_recurso}>
            <CardBody>
              <CardTitle>{recurso.nombre_recurso}</CardTitle>
              <CardText>Tipo: {recurso.tipo}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default Recursos;


