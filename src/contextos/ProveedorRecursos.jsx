import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";
import { useNavigate } from "react-router-dom";

const ContextoRecursos = createContext();

const ProveedorRecursos = ({ children }) => {
    // Estados iniciales:
    const objetoInicial = {};
    const arrayInicial = [];
    const cadenaCargando = "Cargando datos...";
    const cadenaInicial = "";

    const valoresIniciales = {
        nombre_recurso: "",
        tipo: "",
        id_propietario: "",
    };

    // Estados del componente:
    const [situacion, setSituacion] = useState(cadenaInicial);
    const [recurso, setRecurso] = useState(objetoInicial);
    const [recursos, setRecursos] = useState(arrayInicial);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(cadenaInicial);
    const [mensaje, setMensaje] = useState(cadenaInicial);
    const [recursoGuardado, setRecursoGuardado] = useState(false);

    // Función para validar los datos de un recurso:
    const validarRecurso = (elemento) => {
        const { name, value } = elemento;
        let erroresElemento = [];

        if (name === "nombre_recurso" || name === "tipo" || name === "id_propietario") {
            if (!value.trim()) {
                erroresElemento = [...erroresElemento, `El campo ${name} debe tener un valor.`];
            }
        }

        return erroresElemento;
    };

    // Función para validar el formulario de recursos:
    const validarFormulario = () => {
        const formulario = document.querySelector('form'); // Obtener el formulario
        if (!formulario) {
            console.error("El formulario no está definido.");
            return false; // Salir de la función si el formulario no está definido
        }

        let erroresListado = [];

        for (var i = 0; i < formulario.elements.length - 1; i++) {
            let erroresElemento;
            erroresElemento = validarRecurso(formulario.elements[i]);

            if (erroresElemento.length !== 0) {
                formulario.elements[i].classList.add("error");
            } else {
                formulario.elements[i].classList.remove("error");
            }

            erroresListado = [...erroresListado, ...erroresElemento];
        }

        return erroresListado.length === 0;
    };

    // Obtener listado de recursos:
    const listadoRecursos = async () => {
        try {
            setCargando(true);
            const { data, error } = await supabaseConexion.from("recursos").select("*");
            if (error) {
                setError("Error al obtener los recursos");
            } else {
                setRecursos(data);
            }
        } catch (error) {
            setError("Error al obtener los recursos");
        } finally {
            setCargando(false);
        }
    };

    // Obtener un recurso por su ID:
    const obtenerRecurso = async (id) => {
        try {
            setCargando(true);
            const { data, error } = await supabaseConexion.from("recursos").select("*").eq("id_recurso", id);
            if (error) {
                setError("Error al obtener el recurso");
            } else if (data.length === 0) {
                setError("Recurso no encontrado");
            } else {
                setRecurso(data[0]);
            }
        } catch (error) {
            setError("Error al obtener el recurso");
        } finally {
            setCargando(false);
        }
    };

    // Seleccionar un recurso:
    const seleccionarRecurso = async (id) => {
        setError(cadenaInicial);
        try {
            const { data, error } = await supabaseConexion.from("recursos").select("*").eq("id_recurso", id);
            if (error) {
                setError("Error al seleccionar el recurso");
            } else if (data.length === 0) {
                setError("Recurso no encontrado");
            } else {
                setRecurso(data[0]);
            }
        } catch (error) {
            setError("Error al seleccionar el recurso");
        }
    };

    // Modificar un recurso:
    const modificarRecurso = async (id, datos) => {
        try {
            setCargando(true);
            const { data, error } = await supabaseConexion
                .from("recursos")
                .update(datos)
                .eq("id_recurso", id);
            if (error) {
                setError("Error al modificar el recurso");
            } else {
                setMensaje("Recurso modificado correctamente");
                listadoRecursos();
            }
        } catch (error) {
            setError("Error al modificar el recurso");
        } finally {
            setCargando(false);
        }
    };

    // Eliminar un recurso:
    const eliminarRecurso = async (id) => {
        try {
            setCargando(true);
            const { error } = await supabaseConexion.from("recursos").delete().eq("id_recurso", id);
            if (error) {
                setError("Error al eliminar el recurso");
            } else {
                setMensaje("Recurso eliminado correctamente");
                listadoRecursos();
            }
        } catch (error) {
            setError("Error al eliminar el recurso");
        } finally {
            setCargando(false);
        }
    };

    // Crear un nuevo recurso:
    const crearRecurso = async () => {
        try {
            setCargando(true);
            // Validar los campos del nuevo recurso.
            if (!recurso.nombre_recurso || !recurso.tipo || !recurso.id_propietario) {
                setError("Todos los campos son obligatorios");
                return;
            }
            const { data, error } = await supabaseConexion.from("recursos").insert(recurso);
            if (error) {
                setError("Error al crear el recurso");
            } else {
                setMensaje("Recurso creado correctamente");
                setRecurso(valoresIniciales);
                setRecursos([...recursos, data[0]]);
                setRecursoGuardado(true); // Establecer el estado recursoGuardado
                listadoRecursos();
            }
        } catch (error) {
            setError("Error al crear el recurso");
        } finally {
            setCargando(false);
        }
    };

    const manejarGuardar = async () => {
        // Validar el formulario antes de crear el recurso
        const isValid = validarFormulario();
        if (isValid) {
            await crearRecurso();
            setRecursoGuardado(true);
        }
    };

    useEffect(() => {
        listadoRecursos();
    }, []);

    // Contexto a proveer:
    const datosAExportar = {
        situacion,
        recurso,
        setRecurso,
        recursos,
        cargando,
        error,
        mensaje,
        listadoRecursos,
        obtenerRecurso,
        seleccionarRecurso,
        modificarRecurso,
        eliminarRecurso,
        crearRecurso, 
        validarFormulario,
        validarRecurso,
        recursoGuardado,
        setRecursoGuardado,
        manejarGuardar,
    };

    return (
        <ContextoRecursos.Provider value={datosAExportar}>
            {children}
        </ContextoRecursos.Provider>
    );
};

export default ProveedorRecursos;
export { ContextoRecursos };
