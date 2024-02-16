import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";
import { useNavigate } from "react-router-dom";

  const ContextoUsuarios = createContext();
  
  const ProveedorUsuarios = ({ children }) => {
    /** Hook para redirigir las rutas de la biblioteca react-router-dom. */
    const navegar = useNavigate();
  
    /** Valores iniciales para los estados */
    // Objeto para el formulario de creación de usuario.
    const datosSesionInicial = {
      email: "",
      password: "",
    };
    const sesionInicial = false;
    const usuarioInicial = {};
    // Variable para la gestión de errores con los usuarios.
    const errorUsuarioInicial = "";
  
    /** Estados para proveer. */
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionInicial);
  
    /**
     * Función para reenviar a la pantalla de inicio de sesión.
     */
    const navegarLogin = () => {
      navegar("login");
    };
  
    // Antes de empezar -> configurar el servidor de Supabase.
  
    /**
     * Función para crear cuenta.
     * Se usa  el nombre de usuario y contraseña.
     */
    const crearCuenta = async () => {
      try {
        const { data, error } = await supabaseConexion.auth.signUp({
          email: datosSesion.email,
          password: datosSesion.password,
        });
  
        if (error) {
          throw error;
        } else {
          setErrorUsuario(
            "Recibirás un correo para la confirmación de la cuenta."
          );
        }
      } catch (error) {
        setErrorUsuario(error.message);
      }
    };
  
    /**
     * Inicio de sesión con email y contraseña.
     */
    const iniciarSesion = async () => {
      setErrorUsuario(errorUsuarioInicial);
      try {
        const { error } = await supabaseConexion.auth.signInWithPassword({
          email: datosSesion.email,
          password: datosSesion.password,
        });
  
        if (error) {
          throw error;
        }
  
        setSesionIniciada(true);
        navegar("/");
      } catch (error) {
        setErrorUsuario(error.message);
      }
    };
  
    /**
     * Función para cerrar la sesión.
     */
    const cerrarSesion = async () => {
      try {
        // Se cierra la sesión en el servidor de Supabase.
        await supabaseConexion.auth.signOut();
        // Se redirige la aplicación a la parte pública (<Login>).
        navegarLogin();
        setSesionIniciada(false);
      } catch (error) {
        setErrorUsuario(error.message);
      }
    };
  
    /**
     * Función para obtener los datos del usuario que ha iniciado
     * la sesión y actualizar el estado.
     */
    const obtenerUsuario = async () => {
      try {
        const { data, error } = await supabaseConexion.auth.getUser();
  
        if (error) {
          throw error;
        }
  
        setUsuario(data.user);
  
        /* Imprimir usuarios por consola (data y estado).
        console.log(estado);
        console.log(data.user); */
      } catch (error) {
        setErrorUsuario(error.message);
        navegarLogin();
      }
    };
  
    /**
     * Función para actualizar los datos de un formulario
     * al estado "datosSesion".
     * Diseño -> ¿importar desde otro contexto?
     */
    const actualizarDato = (evento) => {
      const { name, value } = evento.target;
      setDatosSesion({ ...datosSesion, [name]: value });
      console.log(datosSesion);
    };
  
    /** useEffect con las tareas a realizar en la carga del componente. */
    useEffect(() => {

      const suscripcion = supabaseConexion.auth.onAuthStateChange(
        (event, session) => {
          // Se puede utilizar el operador negación para invertir el orden.
          if (session) {
            // Si hay sesión se carga la parte privada de la web.
            navegar("/");
            // Se imprime por consola con fines formativos.
            //console.log(session);
            setSesionIniciada(true);
            // Información del usuario que tiene sesión iniciada.
            obtenerUsuario();
          } else {
            // Si no hay sesión, se redirige a la parte pública de la web.
            navegar("login");
            setSesionIniciada(false);
          }
        }
      );
      // Se revisa el objeto por consola (sólo con fines formativos).
      //console.log(suscripcion);
    }, []);
  
    // Objeto con la información a exportar.
  
    const datosAExportar = {
      sesionIniciada,
      errorUsuario,
      crearCuenta,
      iniciarSesion,
      cerrarSesion,
      actualizarDato,
      datosSesion,
    };
  
      return (
        <ContextoUsuarios.Provider value={datosAExportar}>
          {children}
        </ContextoUsuarios.Provider>
    );
};
    
export default ProveedorUsuarios;
export { ContextoUsuarios };