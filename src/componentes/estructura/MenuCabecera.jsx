import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioSesion from './InicioSesion';
import Navegacion from './Navegacion';
import Rutas from './rutas/Rutas';

const MenuCabecera = () => {
  return (
    <Fragment>
       <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Mi Sitio</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/inicio" className='enlace'>Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/sobre" className='enlace'>Sobre SSLife</NavLink>
        </NavItem>
        <NavItem>
         <InicioSesion />
        </NavItem>
        {/* Aquí puedes agregar más elementos de navegación si es necesario */}
      </Nav>
    </Navbar>
    </Fragment>
  );
}

export default MenuCabecera;
