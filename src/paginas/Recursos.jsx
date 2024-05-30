import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Card, Button, Collapse, Form, InputGroup, FormControl } from 'react-bootstrap';
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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Filtrar por nombre
    const recursosFiltradosPorNombre = filtrarPorNombre(listadoRecursos, filtroNombre);

    // Filtrar por tipo sobre los recursos ya filtrados por nombre
    const recursosFiltradosPorTipo = filtrarPorTipo(recursosFiltradosPorNombre, filtroTipo);

    // Actualizar el estado de recursos filtrados
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
      <Container className="py-5">
        <div className="section-title text-center">
          <h2>Listado de Recursos</h2>
        </div>
        <div className="text-center mb-4">
          <Button variant="warning"
            onClick={() => setOpen(!open)}
            aria-controls="filter-collapse"
            aria-expanded={open}
            className="mb-3"
          >
            {open ? "Ocultar Opciones de Filtrado" : "Mostrar Opciones de Filtrado"}
          </Button>
          <Collapse in={open}>
            <div id="filter-collapse">
              <Row className="justify-content-center">
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Filtrar por nombre:</InputGroup.Text>
                    <FormControl
                      type="text"
                      value={filtroNombre}
                      placeholder="Buscar nombre recurso"
                      onChange={(e) => setFiltroNombre(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Filtrar por tipo:</InputGroup.Text>
                    <Form.Select
                      defaultValue={filtroTipo}
                      onChange={(e) => setFiltroTipo(e.target.value)}
                    >
                      <option value="">Todos</option>
                      <option value="articulo">Articulo</option>
                      <option value="video">Video</option>
                      <option value="foro">Foro</option>
                    </Form.Select>
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </Collapse>
        </div>
        <div className="text-center mb-4">
          <Button className="mx-2" variant="success" onClick={ordenarAsc}>Orden ascendente</Button>
          <Button className="mx-2" variant="secondary" onClick={ordenarDesc}>Orden descendente</Button>
        </div>
        <Row className="g-4">
          {recursosFiltrados.map((recurso) => (
            <Col key={recurso.id_recurso} md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.1s">
              <Card className="service-item h-100">
                <Card.Img variant="top" src={recurso.imagen} alt="imagen-recurso" className="img-fluid" />
                <Card.Body className="text-center">
                  <Card.Title>{recurso.nombre_recurso}</Card.Title>
                  <Card.Text>Tipo: {recurso.tipo}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/crear-recurso">
            <Button variant="success" className="mx-2">Crear Recurso</Button>
          </Link>
          <Link to="/editar-recurso">
            <Button variant="secondary" className="mx-2">Editar Recurso</Button>
          </Link>
        </div>
      </Container>
    </Fragment>
  );
};

export default Recursos;
