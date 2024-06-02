import React, { useEffect, useState } from 'react';
import { Form, Button, ListGroup, Modal, Container, Row, Col, Card } from 'react-bootstrap';
import useRecursos from '../hooks/useRecursos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const EdicionRecursos = () => {
  const {
    listadoRecursos,
    recursoSeleccionado,
    modificarDato,
    actualizarRecurso,
    obtenerRecurso,
    eliminarRecurso,
    validarFormulario
  } = useRecursos();

  const [exitoMensaje, setExitoMensaje] = useState('');
  const [errorFormulario, setErrorFormulario] = useState('');
  const [ConfirmacionEliminar, setConfirmacionEliminar] = useState(false);
  const [ConfirmacionEditar, setConfirmacionEditar] = useState(false);

  useEffect(() => {
  }, [listadoRecursos]);

  const manejarActualizacion = async () => {
    try {
      await actualizarRecurso();
      setExitoMensaje('El recurso se actualizó correctamente.');
      setConfirmacionEditar(false);
    } catch (error) {
      console.error('Error al actualizar el recurso:', error);
      setErrorFormulario('Error al actualizar el recurso. Inténtalo de nuevo.');
    }
  };

  const manejarEliminacion = async () => {
    try {
      await eliminarRecurso(recursoSeleccionado.id_recurso);
      setExitoMensaje('El recurso se eliminó correctamente.');
      setConfirmacionEliminar(false);
    } catch (error) {
      console.error('Error al eliminar el recurso:', error);
      setErrorFormulario('Error al eliminar el recurso. Inténtalo de nuevo.');
    }
  };

  const seleccionar = (id_recurso) => {
    obtenerRecurso(id_recurso);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Editar Recurso</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <h3 className="text-center">Selecciona un recurso</h3>
          <ListGroup>
            {listadoRecursos.map((recurso) => (
              <ListGroup.Item
                key={recurso.id_recurso}
                action
                onClick={() => seleccionar(recurso.id_recurso)}
                active={recurso.id_recurso === recursoSeleccionado?.id_recurso}
                className="mb-2"
                style={{ cursor: 'pointer', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
              >
                {recurso.nombre_recurso}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={8 } className="d-flex justify-content-around">
          <Card className="p-4" style={{ borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
            <Form>
              <Form.Group controlId="nombre_recurso" className="text-left">
                <Form.Label>Nombre del Recurso</Form.Label> 
                <Form.Control
                  type="text"
                  name="nombre_recurso"
                  placeholder="Modifica el nombre del recurso."
                  value={recursoSeleccionado?.nombre_recurso || ''}
                  onChange={modificarDato}
                  required
                />
              </Form.Group>
              <Form.Group controlId="tipo" className="text-left">
                <Form.Label>Tipo</Form.Label> 
                <Form.Control
                  as="select"
                  name="tipo"
                  value={recursoSeleccionado?.tipo || ''}
                  onChange={modificarDato}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="articulo">Artículo</option>
                  <option value="video">Video</option>
                  <option value="foro">Foro</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="enlace" className="text-left">
                <Form.Label>Enlace del Recurso</Form.Label>
                <Form.Control
                  type="text"
                  name="enlace"
                  placeholder="Modifica el enlace del recurso."
                  value={recursoSeleccionado?.enlace || ''}
                  onChange={modificarDato}
                  required
                />
              </Form.Group>
              <Form.Group className="text-left">
                <Form.Label>Categoría</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    id="categoriaBullying"
                    name="categoria"
                    label="Bullying"
                    value="bullying"
                    checked={recursoSeleccionado?.categoria === "bullying"}
                    onChange={modificarDato}
                    required
                  />
                  <Form.Check
                    type="radio"
                    id="categoriaSoledad"
                    name="categoria"
                    label="Soledad"
                    value="soledad"
                    checked={recursoSeleccionado?.categoria === "soledad"}
                    onChange={modificarDato}
                    required
                    className="ml-3"
                  />
                </div>
              </Form.Group>
              <div className="text-center my-3">
                <Button variant="danger" onClick={() => setConfirmacionEliminar(true)} className="mr-2">
                  Eliminar Recurso
                </Button>
                <Button variant="success" onClick={() => setConfirmacionEditar(true)}>
                  Guardar Cambios
                </Button>
              </div>
              {exitoMensaje && <p style={{ color: 'green', fontSize: '1.2em', textAlign: 'center' }}>{exitoMensaje}</p>} 
              {errorFormulario && <p style={{ color: 'red', fontSize: '1.2em', textAlign: 'center' }}>{errorFormulario}</p>}
            </Form>
          </Card>
          <Modal show={ConfirmacionEliminar} onHide={() => setConfirmacionEliminar(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Estás seguro de que quieres eliminar este recurso?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setConfirmacionEliminar(false)}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={manejarEliminacion}>
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={ConfirmacionEditar} onHide={() => setConfirmacionEditar(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Edición</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Estás seguro de que quieres guardar los cambios?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setConfirmacionEditar(false)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={manejarActualizacion}>
                Guardar Cambios
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
            <Link to="/recursos">
                <Button variant="secondary" className="mx-2">Volver a recursos</Button>
            </Link>
        </Col>
        <Col xs="auto">
          <Link to="/crear-recurso">
                <Button variant="primary" className="mx-2">Crear Recurso</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default EdicionRecursos;
