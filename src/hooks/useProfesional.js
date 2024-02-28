import { useContext } from "react";
import { contextoProfesionales } from "../contextos/ProveedorProfesionales";

const useProfesional = () => {
  const contexto = useContext(contextoProfesionales);
  return contexto;
};

export default useProfesional;
