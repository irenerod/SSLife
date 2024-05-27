import React, { useState } from "react";
import { Container, Card, Form, Button, Nav, Tab, Alert } from "react-bootstrap";
import useUsuarios from "../hooks/useUsuarios";
import "../estilos/Login.css";

const Login = () => {
  const { iniciarSesion, crearCuenta, actualizarDato, errorUsuario, datosSesion } = useUsuarios();
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [activeKey, setActiveKey] = useState('login');
  const [errorMensaje, setErrorMensaje] = useState("");

  const manejarInicioSesion = async (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  const manejarConfirmar = (e) => {
    actualizarDato(e);
    setConfirmarContrasena(e.target.value);
  };

  const manejarCrearCuenta = async (e) => {
    e.preventDefault();
    if (datosSesion.password !== confirmarContrasena) {
      setErrorMensaje("Las contraseñas no coinciden.");
      return;
    } else {
      setErrorMensaje("");
      crearCuenta();
    }
  };

  return (
    <Container fluid className={`d-flex justify-content-center align-items-center min-vh-80 ${activeKey === 'login' ? 'bg-success' : 'bg-danger'}`}>
      <Card className="w-100" style={{ maxWidth: '400px', border: 'none' }}>
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Nav variant="pills" className="d-flex justify-content-center mb-3">
            <Nav.Item>
              <Nav.Link eventKey="login" className={`text-center w-100 btl ${activeKey === 'login' ? 'active-tab bg-success text-white' : 'inactive-tab text-black'}`}>Iniciar sesión</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="signup" className={`text-center w-100 btr ${activeKey === 'signup' ? 'active-tab bg-danger text-white' : 'inactive-tab text-black'}`}>Registrarse</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="login">
              <Form className="px-4 pt-5" onSubmit={manejarInicioSesion}>
                <Form.Group>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su correo electrónico."
                    onChange={(e) => actualizarDato(e)}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingrese su contraseña."
                    onChange={(e) => actualizarDato(e)}
                    className="mb-3"
                  />
                </Form.Group>
                <Button variant="success" className="btn-block iniciar-btn" type="submit">Iniciar</Button>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="signup">
              <Form className="px-4" onSubmit={manejarCrearCuenta}>
                <Form.Group>
                  <Form.Control
                    type="email"
                    id="email"
                    name='email'
                    placeholder="Ingrese su correo electrónico."
                    onChange={(e) => actualizarDato(e)}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingrese su contraseña."
                    onChange={(e) => actualizarDato(e)}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirme su contraseña."
                    value={confirmarContrasena}
                    onChange={(e) => manejarConfirmar(e)}
                    className={`mb-3 ${datosSesion.password === confirmarContrasena ? 'is-valid' : 'is-invalid'}`}
                  />
                </Form.Group>
                {errorMensaje && <Alert variant="danger" className="mt-3">{errorMensaje}</Alert>}
                <Button variant="danger" className="btn-block registrar-btn text-white" type="submit">Registrar</Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        {errorUsuario && <Alert variant="danger" className="mt-3">{errorUsuario}</Alert>}
      </Card>
    </Container>
  );
};

export default Login;
