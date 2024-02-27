import React, { Fragment, useState } from "react";
import useRecursos from "../hooks/useRecursos.js";
import Button from 'react-bootstrap/Button';

// Formulario para CREAR un recurso.
const CrearRecurso = () => {
    // Llamamos al contexto.
    const arrayInicial = [];
    const { recurso, error, setRecurso, crearRecurso, validarFormulario } = useRecursos();
    const [erroresFormulario, setErroresFormulario] = useState(arrayInicial); // Estado para los errores del formulario
    const [recursoCreado, setRecursoCreado] = useState(false); // Estado para controlar si el recurso se creó correctamente

    // Función para manejar la creación exitosa del recurso
    const manejarCreacion = () => {
        setRecursoCreado(true);
    };

    return (
        <Fragment>
            <h2>Crear un nuevo recurso:</h2>
            <div>
                {error ? (
                    /** Manejo de errores */
                    error
                ) : (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        // Valida el formulario antes de crear el recurso
                        if (validarFormulario()) {
                            crearRecurso();
                            manejarCreacion(); // Maneja la creación exitosa del recurso
                        }
                    }}>
                        <label htmlFor="nombre_recurso">Nombre:</label>
                        <input
                            type="text"
                            id="nombre_recurso"
                            name="nombre_recurso"
                            value={recurso.nombre_recurso || ""}
                            onChange={(e) => setRecurso({ ...recurso, nombre_recurso: e.target.value })}
                            required
                        />
                        {/* Muestra los errores del campo nombre_recurso */}
                        {erroresFormulario.includes("nombre_recurso") && <p>Nombre no válido</p>}

                        <label htmlFor="tipo">Tipo:</label>
                        <select
                            id="tipo"
                            name="tipo"
                            value={recurso.tipo || ""}
                            onChange={(e) => setRecurso({ ...recurso, tipo: e.target.value })}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="articulo">Artículo</option>
                            <option value="video">Video</option>
                            <option value="foro">Foro</option>
                        </select>
                        {/* Muestra los errores del campo tipo */}
                        {erroresFormulario.includes("tipo") && <p>Tipo no válido</p>}

                        {/* Campo de propietario */}
                        <label htmlFor="id_propietario">Selecciona el propietario del recurso:</label>
                        <select
                            id="id_propietario"
                            name="id_propietario"
                            value={recurso.id_propietario || ""}
                            onChange={(e) => setRecurso({ ...recurso, id_propietario: e.target.value })}
                            required
                        >
                            <option value="">Seleccione un propietario</option>
                            {/* Opciones de propietarios */}
                        </select>
                        {/* Muestra los errores del campo id_propietario */}
                        {erroresFormulario.includes("id_propietario") && <p>ID Propietario no válido</p>}

                        {/* Botón de envío */}
                        <Button variant="light" type="submit">Guardar recurso</Button>

                        {/* Muestra el mensaje si el recurso se creó correctamente */}
                        {recursoCreado && <p style={{ color: "green" }}>El recurso se añadió correctamente.</p>}
                    </form>
                )}
            </div>
        </Fragment>
    );
};

export default CrearRecurso;


