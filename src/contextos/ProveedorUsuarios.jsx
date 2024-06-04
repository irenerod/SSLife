import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";
import { useNavigate } from "react-router-dom";

  const ContextoUsuarios = createContext();
  
  const ProveedorUsuarios = ({ children }) => {

    const navegar = useNavigate();

    const datosSesionInicial = {
      email: "",
      password: "",
    };
    const sesionInicial = false;
    const usuarioInicial = {};
    const errorUsuarioInicial = "";
  
    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionInicial);

    const navegarLogin = () => {
      navegar("login");
    };

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
        setErrorUsuario("Credenciales de registro inválidas");
      }
    };
  
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
        setErrorUsuario("Credenciales de inicio de sesión inválidas.");
      }
    };
  
    const cerrarSesion = async () => {
      try {
        await supabaseConexion.auth.signOut();
        navegarLogin();
        setSesionIniciada(false);
      } catch (error) {
        setErrorUsuario(error.message);
      }
    };
  
    const obtenerUsuario = async () => {
      try {
        const { data, error } = await supabaseConexion.auth.getUser();
  
        if (error) {
          throw error;
        }
  
        setUsuario(data.user);

      } catch (error) {
        setErrorUsuario(error.message);
        navegarLogin();
      }
    };
  
    const actualizarDato = (evento) => {
      const { name, value } = evento.target;
      setDatosSesion({ ...datosSesion, [name]: value });
    };
  
    useEffect(() => {

      const suscripcion = supabaseConexion.auth.onAuthStateChange(
        (event, session) => {
          if (session) {
            navegar("/");
            setSesionIniciada(true);
            obtenerUsuario();
          } else {
            navegar("/");
            setSesionIniciada(false);
          }
        }
      );
  
    }, []);
    
    const datosAExportar = {
      sesionIniciada,
      errorUsuario,
      crearCuenta,
      iniciarSesion,
      cerrarSesion,
      actualizarDato,
      datosSesion,
      usuario,
    };
  
      return (
        <ContextoUsuarios.Provider value={datosAExportar}>
          {children}
        </ContextoUsuarios.Provider>
    );
};
    
export default ProveedorUsuarios;
export { ContextoUsuarios };