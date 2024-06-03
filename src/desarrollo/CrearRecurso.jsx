import React, { Fragment, useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import useRecursos from "../hooks/useRecursos.js";
import useProfesional from "../hooks/useProfesional.js";
import { Link } from "react-router-dom";

const CrearRecurso = () => {
    const { listaProfesionales, obtenerNombrePropietario } = useProfesional();
    const { recurso, error, actualizarDato, crearRecurso } = useRecursos();
    const [erroresFormulario, setErroresFormulario] = useState([]);
    const [recursoCreado, setRecursoCreado] = useState(false);

    const validarFormulario = () => {
        const errores = [];
        if (!recurso.nombre_recurso) errores.push("nombre_recurso");
        if (!recurso.tipo) errores.push("tipo");
        if (!recurso.id_propietario) errores.push("id_propietario");
        if (!recurso.enlace) errores.push("enlace");
        if (!recurso.categoria) errores.push("categoria");
        setErroresFormulario(errores);
        return errores.length === 0;
    };

    const manejarCrear = () => {
        setRecursoCreado(true);
    };

    return (
        <Fragment>
            <Container>
                <h2 className="text-center my-4">Añadir un recurso:</h2>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <div>
                            {error ? (
                                error
                            ) : (
                                <Form id="crearRecurso">
                                    <Form.Group controlId="nombre_recurso">
                                        <Form.Label>Nombre del Recurso:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nombre_recurso"
                                            placeholder="Ingresa el nombre del recurso."
                                            value={recurso.nombre_recurso || ""}
                                            onChange={(e) => {
                                                actualizarDato(e);
                                            }}
                                            isInvalid={erroresFormulario.includes("nombre_recurso")}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Nombre del recurso requerido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="tipo">
                                        <Form.Label>Selecciona un tipo:</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="tipo"
                                            value={recurso.tipo || ""}
                                            onChange={(e) => {
                                                actualizarDato(e);
                                            }}
                                            isInvalid={erroresFormulario.includes("tipo")}
                                            required
                                        >
                                            <option value="">Seleccionar tipo</option>
                                            <option value="articulo">Artículo</option>
                                            <option value="video">Video</option>
                                            <option value="foro">Foro</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Tipo de recurso requerido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="id_propietario">
                                        <Form.Label>Selecciona un autor:</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="id_propietario"
                                            value={recurso.id_propietario || ""}
                                            onChange={(e) => {
                                                actualizarDato(e);
                                            }}
                                            isInvalid={erroresFormulario.includes("id_propietario")}
                                            required
                                        >
                                            <option value="">Seleccionar autor</option>
                                            {listaProfesionales.map((profesional) => (
                                                <option key={profesional.id_profesional} value={profesional.id_profesional}>
                                                    {obtenerNombrePropietario(profesional.id_profesional)}
                                                </option>
                                            ))}
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            ID Propietario no válido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="imagen">
                                        <Form.Label>Enlace de imagen:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="imagen"
                                            placeholder="Ingresa el enlace de la imagen del recurso."
                                            value={recurso.imagen || ""}
                                            onChange={(e) => {
                                                actualizarDato(e);
                                            }}
                                            isInvalid={erroresFormulario.includes("imagen")}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Enlace de la imagen requerida
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="enlace">
                                        <Form.Label>Enlace del Recurso:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="enlace"
                                            placeholder="Ingresa el enlace del recurso."
                                            value={recurso.enlace || ""}
                                            onChange={(e) => {
                                                actualizarDato(e);
                                            }}
                                            isInvalid={erroresFormulario.includes("enlace")}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Enlace del recurso requerido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Categoría:</Form.Label>
                                        <div className="'d-flex justify-content-evenly'">
                                            <Form.Check
                                                type="radio"
                                                id="categoriaBullying"
                                                name="categoria"
                                                label="Bullying"
                                                value="bullying"
                                                checked={recurso.categoria === "bullying"}
                                                onChange={(e) => {
                                                    actualizarDato(e);
                                                }}
                                                isInvalid={erroresFormulario.includes("categoria")}
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="categoriaSoledad"
                                                name="categoria"
                                                label="Soledad"
                                                value="soledad"
                                                checked={recurso.categoria === "soledad"}
                                                onChange={(e) => {
                                                    actualizarDato(e);
                                                }}
                                                isInvalid={erroresFormulario.includes("categoria")}
                                                className="ml-3"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Categoría del recurso requerida
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button
                                            variant="success"
                                            onClick={(e) => {
                                                if (validarFormulario()) {
                                                    crearRecurso(e);
                                                    manejarCrear();
                                                }
                                            }}
                                        >
                                            Añadir recurso
                                        </Button>
                                    </div>
                                    {recursoCreado && <p style={{ color: 'green', fontSize: '1.2em', textAlign: 'center' }}>El recurso se creó correctamente.</p>}
                                </Form>
                            )}
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs="auto">
                        <Link to="/recursos">
                            <Button variant="secondary" className="mx-2">Volver a recursos</Button>
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/editar-recurso">
                            <Button variant="primary" className="mx-2">Editar Recurso</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CrearRecurso;
