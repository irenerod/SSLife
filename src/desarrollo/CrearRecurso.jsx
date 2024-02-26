import React, { useState } from "react";
import useRecursos from "../hooks/useRecursos";

const FormularioCrearRecurso = () => {
    const { recurso, setRecurso, error, crearRecurso, validarRecurso } = useRecursos();
    const arrayInicial=[];
    const [erroresFormulario, setErroresFormulario] = useState(arrayInicial);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecurso({
            ...recurso,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validar el formulario antes de crear el recurso
        const isValid = validarFormulario();
        if (isValid) {
            await crearRecurso(recurso);
            setRecurso({
                nombre_recurso: "",
                tipo: "",
                id_propietario: ""
            });
            setProductoCreado(true);
        }
    };

    const validarFormulario = () => {
        const errores = validarRecurso(recurso);
        setErroresFormulario(errores);
        return errores.length === 0;
    };

    const resetFormulario = () => {
        setRecurso({
            nombre_recurso: "",
            tipo: "",
            id_propietario: ""
        });
        setErroresFormulario([]);
        setProductoCreado(false);
    };

    return (
        <Fragment>
            <h2>Crear un nuevo recurso:</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre_recurso">Nombre:</label>
                    <input
                        type="text"
                        id="nombre_recurso"
                        name="nombre_recurso"
                        value={recurso.nombre_recurso}
                        onChange={handleChange}
                        required
                    />
                    {erroresFormulario.includes("nombre_recurso") && <p>Nombre no válido</p>}

                    <label htmlFor="tipo">Tipo:</label>
                    <select
                        id="tipo"
                        name="tipo"
                        value={recurso.tipo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="articulo">Artículo</option>
                        <option value="video">Video</option>
                        <option value="foro">Foro</option>
                    </select>
                    {erroresFormulario.includes("tipo") && <p>Tipo no válido</p>}

                    <label htmlFor="id_propietario">ID Propietario:</label>
                    <input
                        type="text"
                        id="id_propietario"
                        name="id_propietario"
                        value={recurso.id_propietario}
                        onChange={handleChange}
                        required
                    />
                    {erroresFormulario.includes("id_propietario") && <p>ID Propietario no válido</p>}

                    <button type="submit">Crear Recurso</button>
                </form>

                {productoCreado && <p style={{ color: "green" }}>El recurso se creó correctamente.</p>}
            </div>
        </Fragment>
    );
};

export default FormularioCrearRecurso;
