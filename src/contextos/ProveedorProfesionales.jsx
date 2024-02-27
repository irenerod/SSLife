import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";
import { useNavigate } from "react-router-dom";

const contextoProfesionales = createContext();

const ProveedorProfesionales = ({ children }) => {
  const [datosProfesional, setDatosProfesional] = useState(null);

  // Función para obtener los datos del profesional desde la base de datos
  const obtenerDatosProfesional = async () => {
    try {
      // Consulta a la tabla 'profesional' para obtener datos específicos del profesional
      const { data: datosProfesional, error } = await supabaseConexion
        .from('profesional')
        .select('tipo, id_profesional')
        .single();

      if (error) {
        throw error;
      }

      // Si se obtienen datos del profesional, ahora podemos obtener más información del usuario asociado
      if (datosProfesional) {
        const { id_profesional } = datosProfesional;

        // Consulta a la tabla 'usuario' para obtener más información del usuario asociado al profesional
        const { data: datosUsuario, error: errorUsuario } = await supabaseConexion
          .from('usuario')
          .select('*')
          .eq('usuario_id', id_profesional)
          .single();

        if (errorUsuario) {
          throw errorUsuario;
        }

        // Si se obtienen datos del usuario asociado, combinamos la información del profesional y del usuario
        if (datosUsuario) {
          setDatosProfesional({ ...datosProfesional, usuario: datosUsuario });
        }
      }
    } catch (error) {
      console.error('Error al obtener datos del profesional:', error.message);
    }
  };

  useEffect(() => {
    obtenerDatosProfesional();
  }, []);

  const datosAExportar = {
    obtenerDatosProfesional,
    datosProfesional,
  };

  return (
    <contextoProfesionales.Provider value={datosAExportar}>
      {children}
    </contextoProfesionales.Provider>
  );
};

export default ProveedorProfesionales;
export { contextoProfesionales };
