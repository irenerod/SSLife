import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, ListGroup, Modal } from 'react-bootstrap';
import useRecursos from '../hooks/useRecursos';

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
    <div>
      <h2>Editar Recurso</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 30%', marginRight: '20px' }}>
          <h3>Selecciona un recurso</h3>
          <ListGroup>
            {listadoRecursos.map((recurso) => (
              <ListGroup.Item
                key={recurso.id_recurso}
                action
                onClick={() => seleccionar(recurso.id_recurso)}
                active={recurso.id_recurso === recursoSeleccionado?.id_recurso}
              >
                {recurso.nombre_recurso}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div style={{ flex: '1' }}>
          <Form>
            <Form.Group controlId="nombre_recurso">
              <Form.Label>Nombre del Recurso</Form.Label>
              <Form.Control
                type="text"
                name="nombre_recurso"
                value={recursoSeleccionado?.nombre_recurso || ''}
                onChange={modificarDato}
                required
              />
            </Form.Group>
            <Form.Group controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                name="tipo"
                value={recursoSeleccionado?.tipo || ''}
                onChange={modificarDato}
                required
              >
                <option value="">Seleccione un tipo</option>
                <option value="articulo">Articulo</option>
                <option value="video">Video</option>
                <option value="foro">Foro</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={() => setConfirmacionEditar(true)}>
              Guardar Cambios
            </Button>
            <Button variant="danger" onClick={() => setConfirmacionEliminar(true)}>
              Eliminar Recurso
            </Button>
            {exitoMensaje && <p style={{ color: 'green' }}>{exitoMensaje}</p>}
            {errorFormulario && <p style={{ color: 'red' }}>{errorFormulario}</p>}
          </Form>
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
        </div>
      </div>
    </div>
  );
};

export default EdicionRecursos;


