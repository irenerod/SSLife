import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase";
import { useNavigate } from "react-router-dom";

  const contextoRecursos = createContext();
  
  const ProveedorRecursos = ({ children }) => {};

  export default ProveedorRecursos;
  export{contextoRecursos}