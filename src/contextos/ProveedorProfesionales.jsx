import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";

const contextoProfesionales = createContext();

const ProveedorProfesionales = ({ children }) => {
  const [listaProfesionales, setListaProfesionales] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    const obtenerProfesionales = async () => {
      try {
        // Consulta para obtener la lista de profesionales
        const { data: datosProfesionales, error: errorProfesionales } = await supabaseConexion
          .from('profesional')
          .select('id_profesional, tipo');

        if (errorProfesionales) {
          throw errorProfesionales;
        }

        setListaProfesionales(datosProfesionales || []);
      } catch (error) {
        console.error('Error al obtener la lista de profesionales:', error.message);
      }
    };

    const obtenerUsuarios = async () => {
      try {
        // Consulta para obtener la lista de usuarios
        const { data: datosUsuarios, error: errorUsuarios } = await supabaseConexion
          .from('usuario')
          .select('usuario_id, nombre, apellidos');

        if (errorUsuarios) {
          throw errorUsuarios;
        }

        setListaUsuarios(datosUsuarios || []);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error.message);
      }
    };

    obtenerProfesionales();
    obtenerUsuarios();
  }, []);

  // Función para obtener el nombre del propietario a partir de su ID
  const obtenerNombrePropietario = (idPropietario) => {
    const usuario = listaUsuarios.find(usuario => usuario.usuario_id === idPropietario);
    return usuario ? `${usuario.nombre} ${usuario.apellidos}` : 'Propietario no encontrado';
  };

  const datosAExportar = {
    listaProfesionales,
    listaUsuarios,
    obtenerNombrePropietario,
  };

  return (
    <contextoProfesionales.Provider value={datosAExportar}>
      {children}
    </contextoProfesionales.Provider>
  );
};

export default ProveedorProfesionales;
export { contextoProfesionales };
