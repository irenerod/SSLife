import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/Navegacion.css";
import InicioSesion from './InicioSesion';
import useUsuarios from "../../hooks/useUsuarios";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//import Caelestis from "../Caelestis/Caelestis";
import Rutas from "./rutas/Rutas";

const Navegacion = () => {
  // Tiene que estar la sesión iniciada para poder ver las siguientes opciones de navegación.
  const {sesionIniciada}=useUsuarios();

  return (
    <Fragment>      
      <nav>
       {/* Si la sesión está iniciada: */}
        {sesionIniciada && (
          <>
            <Navbar expand="md" className="justify-content-center align-items-center"> 
            <Nav className="ml-auto" navbar>
            <NavItem>
              <img className="logo" src="./src/assets/img/LogosinFondo.png" alt="logo"/>
            </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/inicio" className='enlace'>Inicio</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/sobre" className='enlace'>Sobre SSLife</NavLink>
            </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/recursos" className='enlace'>Recursos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contacto" className='enlace'>Contacto</NavLink>
              </NavItem>
              <NavItem>
              <InicioSesion />
              </NavItem>
            </Nav>
          </Navbar>
          </>
        )} {/* Si la sesión no está iniciada: */}
        {!sesionIniciada && (
          <>
          <Navbar expand="md">
          <Nav className="ml-auto" navbar>
          <NavItem>
              <img className="logo" src="./src/assets/img/LogosinFondo.png" alt="logo"/>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/inicio-sesion" className='enlace'>Iniciar sesion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/sobre" className='enlace'>Sobre SSLife</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/contacto" className='enlace'>Contacto</NavLink>
              </NavItem>
          </Nav>
        </Navbar>
         {/*<Caelestis/>*/}
        </>
        )
        }

      </nav>
   
    </Fragment>
  );
};

export default Navegacion;
