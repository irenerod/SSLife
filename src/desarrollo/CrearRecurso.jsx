import React, { Fragment, useState, useContext } from "react";
import useRecursos from "../hooks/useRecursos.js";
import useProfesional from "../hooks/useProfesional.js";
import "../estilos/Recursos.css";
import { Button } from "react-bootstrap";

const CrearRecurso = () => {
    const { listaProfesionales, obtenerNombrePropietario } = useProfesional();
    const { recurso, error, actualizarDato, crearRecurso, validarRecurso } = useRecursos();
    const [erroresFormulario, setErroresFormulario] = useState([]);
    const [recursoCreado, setRecursoCreado] = useState(false);
  
   // Función para validar el formulario antes de crear el recurso
   const validarFormulario = () => {
    const errores = validarRecurso(recurso);
    setErroresFormulario(errores);
    return errores.length === 0;
};

// Función para manejar la creación exitosa del recurso
const manejarCrear = () => {
    setRecursoCreado(true);
};

  return (
    <Fragment>
      <h2>Añadir un recurso:</h2>
      <div>
        {error ? (
          error
        ) : (
          <form id="crearRecurso">
            <div>
              <label htmlFor="nombre">Nombre del Recurso:</label>
              <input
                type="text"
                id="nombre_recurso"
                name="nombre_recurso"
                value={recurso.nombre_recurso || ""}
                onChange={(e) => {
                    actualizarDato(e);
                  }}                required
              />
              {/* Muestra los errores del campo nombre */}
              {erroresFormulario.includes("nombre_recurso") && <p>Nombre del recurso requerido</p>}
            </div>
            <div>
              <label htmlFor="tipo">Tipo:</label>
              <div>
                <input
                  type="radio"
                  id="tipoArticulo"
                  name="tipo"
                  value="articulo"
                  checked={recurso.tipo === "articulo"}
                  onChange={(e) => {
                    actualizarDato(e);
                  }}
                />
                <label htmlFor="tipoArticulo">Artículo</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="tipoVideo"
                  name="tipo"
                  value="video"
                  checked={recurso.tipo === "video"}
                  onChange={(e) => {
                    actualizarDato(e);
                  }}
                />
                <label htmlFor="tipoVideo">Video</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="tipoForo"
                  name="tipo"
                  value="foro"
                  checked={recurso.tipo === "foro"}
                  onChange={(e) => {
                    actualizarDato(e);
                  }}
                />
                <label htmlFor="tipoForo">Foro</label>
              </div>
              {/* Muestra los errores del campo tipo */}
              {erroresFormulario.includes("tipo") && <p>Tipo de recurso requerido</p>}
            </div>
            <div>
            <label htmlFor="id_propietario">Autor:</label>
            <select
              id="id_propietario"
              name="id_propietario"
              value={recurso.id_propietario || ""}
              onChange={(e) => {
                actualizarDato(e);
              }}
              required
            >
              <option value="">Seleccionar propietario</option>
              {listaProfesionales.map((profesional) => (
                <option key={profesional.id_profesional} value={profesional.id_profesional}>
                  {obtenerNombrePropietario(profesional.id_profesional)}
                </option>
              ))}
            </select>
            {/* Muestra los errores del campo id_propietario */}
            {erroresFormulario.includes("id_propietario") && <p>ID Propietario no válido</p>}
            </div>
            <Button
                variant="light"
                onClick={(e) => {
                    // Valida el formulario antes de crear el recurso
                    if (validarFormulario()) {
                        crearRecurso(e);
                        manejarCrear();
                    }
                }}
            >
                Añadir producto
            </Button>    
            
        {/* Muestra el mensaje si el producto se creó correctamente */}
        {recursoCreado && <p style={{ color: 'green', fontSize: '1.2em' }}>El recurso se creó correctamente.</p>}
        </form>
        )}
      </div>
    </Fragment>
  );
};

export default CrearRecurso;
