import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import useRecursos from "../hooks/useRecursos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"; 

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
          <Button variant="light">Crear Recurso</Button>
        </Link>
        <Link to="/editar-recurso">
          <Button variant="light">Editar Recurso</Button>
        </Link>
      </div>
      <h2>Listado de Recursos</h2>
      <div>
        <label htmlFor="filtroNombre">Filtrar por nombre:</label>
        <input
          type="text"
          id="filtroNombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </div>
      <div>
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
        <Button variant="light" onClick={handleOrdenarAscendente}>Orden ascendente</Button>
        <Button variant="light" onClick={handleOrdenarDescendente}>Orden descendente</Button>
      </div>
      <div className="card-container">
        {recursosFiltrados.map((recurso) => (
          <Card key={recurso.id_recurso}>
            <Card.Body>
              <Card.Title>{recurso.nombre_recurso}</Card.Title>
              <Card.Text>Tipo: {recurso.tipo}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recursos;


