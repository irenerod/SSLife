import { useContext } from "react";
import { ContextoRecursos } from "../contextos/ProveedorRecursos";

const useRecursos = () => {
  const contexto = useContext(ContextoRecursos);
  return contexto;
};

export default useRecursos;
