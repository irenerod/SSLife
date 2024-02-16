import { useContext } from "react";
import { ContextoUsuarios } from "../contextos/ProveedorUsuarios";

const useUsuarios = () => {
  const contexto = useContext(ContextoUsuarios);
  return contexto;
};

export default useUsuarios;
