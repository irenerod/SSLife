import React, { Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import "../estilos/Login.css";
import useUsuarios from "../hooks/useUsuarios";

const Login = () => {
  const { iniciarSesion, crearCuenta, actualizarDato, errorUsuario, setErrorUsuario, datosSesion } = useUsuarios();
  const valorInicial = "";
  const [confirmarContrasena, setConfirmarContrasena] = useState(valorInicial);
  const [activeTab, setActiveTab] = useState('1');

  // Pestaña para registrarse o iniciar sesión.
  const toggleTab = (tab) => {
    if(activeTab !== tab) setActiveTab(tab);
  }
// HAY QUE AÑADIR UN RADIO BUTTON PARA DECIR SI QUIERES REGISTRARTE COMO VICTIMA DE BULLYING O DE SOLEDAD?
  const manejarInicioSesion = async () => {
    iniciarSesion();
  };
  
  const manejarConfirmar = (e) => {
    actualizarDato(e);
    setConfirmarContrasena(e.target.value);
  }

  const manejarCrearCuenta = async () => {
    // Verificamos si las contraseñas coinciden.
    if (datosSesion.password !== confirmarContrasena) {
      // Se muestra un mensaje de error si las contraseñas no coinciden.
      console.log("Las contraseñas no coinciden.");
      return;
    } else {
      // Se crea la cuenta si las contraseñas coinciden
      crearCuenta();
    }
  };

  return (
    <Fragment>
      <div className='inicioSesion' style={{
          backgroundImage: `url('./src/assets/img/monigotes.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggleTab('1'); }}
            >
              Iniciar sesión
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggleTab('2'); }}
            >
              Crear cuenta
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className='cuentaUsuario' style={{ width: '45%', padding: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', marginRight: '5px', marginLeft: 'auto' }}>
              <img src="./src/assets/img/fotoInicio.png" alt="" style={{ width: '100%', marginBottom: '20px' }} />
              <h3>Iniciar sesión</h3>
              <Form>
                <FormGroup>
                  <Label for='email'>Correo electrónico</Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Ingrese su correo electrónico.'
                    onChange={(e) => actualizarDato(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Contraseña</Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Ingrese su contraseña.'
                    onChange={(e) => actualizarDato(e)}
                  />
                </FormGroup>
                <Button color="primary" onClick={manejarInicioSesion}>
                  Iniciar sesión
                </Button>
              </Form>
            </div>
          </TabPane>
          <TabPane tabId="2"> 
            <div className='cuentaUsuario' style={{ width: '45%', padding: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', marginRight: 'auto', marginLeft: '5px' }}>
              <img src="./src/assets/img/fotoInicio.png" alt="" style={{ width: '100%', marginBottom: '20px' }} />
              <h3>Crea una nueva cuenta</h3>
              <Form>
                <FormGroup>
                  <Label for='emailRegistro'>Correo electrónico</Label>
                  <Input
                    type='email'
                    name='email'
                    id='emailRegistro'
                    placeholder='Ingrese su correo electrónico.'
                    onChange={(e) => actualizarDato(e)}
                  />
                </FormGroup>
            <FormGroup>
              <Label for='passwordRegistro'>Contraseña</Label>
              <Input
                type='password'
                name='password'
                id='passwordRegistro'
                placeholder='Ingrese su contraseña, con mínimo 6 caracteres.'
                onChange={(e) => actualizarDato(e)}
              />
            </FormGroup>
            <p className="cursiva">La contraseña debe tener mínimo 6 caracteres.</p>
            <FormGroup>
              <Label for='confirmPassword'>Confirmar Contraseña</Label>
              <Input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Repite la contraseña para confirmarla.'
                value={confirmarContrasena}
                className={datosSesion.password === confirmarContrasena ? 'confirmar-contrasena-input coincide' : 'confirmar-contrasena-input no-coincide'}
                onChange={(e) => manejarConfirmar(e)}
              />
            </FormGroup>
            <Button color="primary" onClick={manejarCrearCuenta}>
              Crear cuenta
            </Button>
          </Form>
          </div>
          </TabPane>
          </TabContent>
      </div>
      {errorUsuario && <Alert color="danger">{errorUsuario}</Alert>}
    </Fragment>
  );
};

export default Login;
