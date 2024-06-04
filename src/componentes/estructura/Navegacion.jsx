import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import useUsuarios from "../../hooks/useUsuarios";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const Navegacion = () => {

  const { sesionIniciada, usuario, cerrarSesion} = useUsuarios();
  const adminEmail = ['irenerodenas.alu@iespacomolla.es', 'pedrosanchezfloresalu@iespacomolla.es'];
  const admin = usuario && adminEmail.includes(usuario.email);

  return (
    <Fragment>
      {/* Si la sesión está iniciada: */}
      {sesionIniciada && (
        <Navbar expand="lg" sticky="top" className="p-0 w-100 mt-2 mb-2 pb-2">
          <Container fluid >
          <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-center px-4 px-lg-5 pt-2">
      <div className="d-flex align-items-center">
        <img className="logo" width="70px" src="./src/assets/img/LogosinFondo.png" alt="logo" />
        <h2 className="m-3 text-danger">SSLIFE</h2>
      </div>
      <span className="text-center fst-italic text-success">No estás solo, conéctate</span>
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" className="me-4" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="ms-auto p-4 p-lg-0">
                <Nav.Link as={Link} to="/inicio" className="active">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/sobre">Sobre SSLife</Nav.Link>
                {admin ? (
                  <NavDropdown title="Recursos" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/recursos">Biblioteca de recursos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/crear-recurso">Crear recursos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/editar-recurso'>Editar recursos</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="Recursos" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/recursos">Biblioteca de recursos</NavDropdown.Item>
                  </NavDropdown>
                )}
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <Button className="btn btn-danger my-2 my-lg-0" onClick={() => {
                    cerrarSesion();
                  }}>
                  Cerrar sesión <i className="fa fa-arrow-right ms-3"></i>
                </Button>
              </Nav>
            </Navbar.Collapse>
          
          </Container>
          
        </Navbar>
        
      )}
      {/* Si la sesión no está iniciada: */}
      {!sesionIniciada && (
        <Navbar expand="lg" sticky="top" className="p-0 w-100 mt-2 mb-2 pb-2">
        <Container fluid >
        <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-center px-4 px-lg-5 pt-2">
        <div className="d-flex align-items-center">
        <img className="logo" width="70px" src="./src/assets/img/LogosinFondo.png" alt="logo" />
        <h2 className="m-3 text-danger">SSLIFE</h2>
        </div>
        <span className="text-center fst-italic text-success">No estás solo, conéctate</span>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" className="me-4" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="ms-auto p-4 p-lg-0">
                <Nav.Link as={Link} to="/sobre" className="active">Sobre SSLife</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <Button as={Link} to="/inicio-sesion" className="btn btn-success my-2 my-lg-0">
                  Iniciar sesión <i className="fa fa-arrow-right ms-3"></i>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </Fragment>
  );
};

export default Navegacion;
