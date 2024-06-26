import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase.js";

const ContextoRecursos = createContext();

const ProveedorRecursos = ({ children }) => {
  const arrayInicial = [];
  const cadenaCargando = "Cargando datos...";
  const cadenaInicial = "";
  const valoresInicialesRecurso = {
    nombre_recurso: "",
    tipo: "",
    imagen: "",
    id_propietario: "",
    categoria: "",
    enlace: "",
  };

  const [listadoRecursos, setListadoRecursos] = useState(arrayInicial);
  const [situacion, setSituacion] = useState(cadenaCargando);
  const [recurso, setRecurso] = useState(valoresInicialesRecurso);
  const [error, setError] = useState(cadenaInicial);
  const [recursoSeleccionado, setRecursoSeleccionado] = useState(null);
  const [filtroNombre, setFiltroNombre] = useState(cadenaInicial);
  const [recursosFiltrados, setRecursosFiltrados] = useState(arrayInicial);
  const [filtroTipo, setFiltroTipo] = useState(cadenaInicial);
  const [filtroCategoria, setFiltroCategoria] = useState(cadenaInicial);

  const obtenerListadoRecursos = async () => {
    try {
      const { data, error } = await supabaseConexion.from("recursos").select("*");
      if (error) {
        console.error("Error al obtener recursos:", error);
      } else {
        setListadoRecursos(data);
        setSituacion("Recursos obtenidos correctamente");
      }
    } catch (error) {
      console.error("Error al obtener recursos:", error.message);
      setSituacion("Error al obtener recursos: " + error.message);
    }
  };

  // Obtener un recurso:
  const obtenerRecurso = async (id_recurso) => {
    setError(cadenaInicial);
    try {
      const { data, error } = await supabaseConexion
        .from("recursos")
        .select("*")
        .eq("id_recurso", id_recurso);
      setRecursoSeleccionado(data[0]);
    } catch (fallo) {
      setSituacion(fallo.message);
    }
  };

  // Actualizamos los datos del recurso:
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setRecurso({ ...recurso, [name]: value });
  };

  const crearRecurso = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await supabaseConexion.from("recursos").insert(recurso);

      setListadoRecursos((prevListadoRecursos) => [...prevListadoRecursos, recurso]);
      setRecurso(valoresInicialesRecurso);
    } catch (error) {
      console.error("Error al crear el recurso:", error);
      setError(error.message);
    }
  };

  // Modificamos los datos del producto seleccionado:
  const modificarDato = (evento) => {
    const { name, value } = evento.target;
    setRecursoSeleccionado({ ...recursoSeleccionado, [name]: value });
  };

  // Seleccionar un recurso para editar:
  const seleccionarRecurso = (recurso) => {
    setRecursoSeleccionado(recurso);
  };

  // Actualizar un recurso:
  const actualizarRecurso = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("recursos")
        .update(recursoSeleccionado)
        .eq("id_recurso", recursoSeleccionado.id_recurso);

      if (error) throw error;

      const recursosCambiados = listadoRecursos.map((recursoAntiguo) => {
        return recursoAntiguo.id_recurso === recursoSeleccionado.id_recurso ? recursoSeleccionado : recursoAntiguo;
      });

      setListadoRecursos(recursosCambiados);
      setRecurso(valoresInicialesRecurso);
    } catch (error) {
      setError(error.message);
    }
  };

  // Eliminar recurso según su id:
  const eliminarRecurso = async (id_recurso) => {
    try {
      const { data, error } = await supabaseConexion
        .from("recursos")
        .delete()
        .eq("id_recurso", id_recurso);

      if (error) {
        throw error;
      }

      // Actualizar el listado de recursos:
      const recursosActualizados = listadoRecursos.filter(recurso => recurso.id_recurso !== id_recurso);
      setListadoRecursos(recursosActualizados);
    } catch (error) {
      setError(error.message);
    }
  };

  // Filtrar por nombre
  const filtrarPorNombre = (recursos, filtroNombre) => {
    if (!filtroNombre) return recursos;
    const nombreFiltrado = filtroNombre.toLowerCase();
    return recursos.filter(recurso => recurso.nombre_recurso.toLowerCase().includes(nombreFiltrado));
  };

  // Filtrar por tipo
  const filtrarPorTipo = (recursos, filtroTipo) => {
    if (!filtroTipo) return recursos;
    return recursos.filter(recurso => recurso.tipo === filtroTipo);
  };

  // Filtrar por categoria
  const filtrarPorCategoria = (recursos, filtroCategoria) => {
    if (!filtroCategoria) return recursos;
    return recursos.filter(recurso => recurso.categoria === filtroCategoria);
  };

  // Ordenar los recursos:
  const ordenarRecursos = async (campo, ascendente) => {
    const { data, error } = await supabaseConexion
      .from('recursos')
      .select('*')
      .order(campo, { ascending: ascendente });

    return data;
  };

  // Ordenar por nombre
  const ordenarNombreAsc = async () => {
    return ordenarRecursos('nombre_recurso', true);
  };

  const ordenarNombreDesc = async () => {
    return ordenarRecursos('nombre_recurso', false);
  };

  // Función para validar los datos de un recurso.
  const validarRecurso = (elemento) => {
    const { name, value } = elemento;
    let erroresElemento = [];

    if (name === "nombre_recurso") {
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} debe tener un valor.`];
      }
    }

    if (name === "tipo") {
      if (!["articulo", "video", "foro"].includes(value)) {
        erroresElemento = [...erroresElemento, `El campo ${name} debe ser uno de: articulo, video, foro.`];
      }
    }

    if (name === "id_propietario") {
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} debe tener un valor.`];
      }
    }

    return erroresElemento;
  };

  // Función para validar el formulario de recursos.
  const validarFormulario = (formulario) => {
    let erroresListado = [];

    for (var i = 0; i < formulario.elements.length; i++) {
      let erroresElemento;
      const elemento = formulario.elements[i];

      switch (elemento.name) {
        case "nombre_recurso":
        case "tipo":
        case "id_propietario":
          erroresElemento = validarRecurso(elemento);
          break;
        default:
          break;
      }

      if (erroresElemento.length !== 0) {
        elemento.classList.add("error");
      } else {
        elemento.classList.remove("error");
      }

      erroresListado = [...erroresListado, ...erroresElemento];
    }

    return erroresListado.length === 0;
  };

  // Datos a exportar: 
  const datosAExportar = {
    listadoRecursos,
    situacion,
    recurso,
    error,
    obtenerListadoRecursos,
    obtenerRecurso,
    actualizarDato,
    crearRecurso,
    seleccionarRecurso,
    recursoSeleccionado,
    setRecursoSeleccionado,
    actualizarRecurso,
    recursosFiltrados,
    setRecursosFiltrados,
    filtroNombre,
    filtrarPorNombre,
    setFiltroNombre,
    ordenarNombreAsc,
    ordenarNombreDesc,
    validarRecurso,
    validarFormulario,
    modificarDato,
    eliminarRecurso,
    setFiltroTipo,
    filtroTipo,
    filtrarPorTipo,
    setFiltroCategoria,
    filtroCategoria,
    filtrarPorCategoria,
  };

  useEffect(() => {
    obtenerListadoRecursos();
  }, []);

  useEffect(() => {
    const recursosFiltrados = filtrarPorNombre(listadoRecursos, filtroNombre)
      .filter(recurso => filtrarPorTipo([recurso], filtroTipo).length > 0)
      .filter(recurso => filtrarPorCategoria([recurso], filtroCategoria).length > 0);
    setRecursosFiltrados(recursosFiltrados);
  }, [filtroNombre, filtroTipo, filtroCategoria, listadoRecursos]);

  return (
    <ContextoRecursos.Provider value={datosAExportar}>
      {children}
    </ContextoRecursos.Provider>
  );
};

export default ProveedorRecursos;
export { ContextoRecursos };