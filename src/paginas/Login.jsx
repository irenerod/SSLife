import React, { Fragment, useState } from "react";
import "../estilos/Login.css";
import useUsuarios from "../hooks/useUsuarios";

const Login = () => {
  const { iniciarSesion, crearCuenta, actualizarDato, errorUsuario, setErrorUsuario, datosSesion } = useUsuarios();
  const valorInicial="";
  const [confirmarContrasena, setConfirmarContrasena] = useState(valorInicial);

  const manejarInicioSesion = async () => {
    iniciarSesion();
  };
  
  const manejarConfirmar =  (e)=>{
    actualizarDato(e);
    setConfirmarContrasena(e.target.value);
  }

  const manejarCrearCuenta = async () => {
    // Verificamos si las contraseñas coinciden.
    if (datosSesion.password !== confirmarContrasena) {
      // Se muestra un mensaje de error si las contraseñas no coinciden.
      console.log("Las contraseñas no coinciden.");
      return;
    }
    else{
      // Se crea la cuenta si las contraseñas coinciden
      crearCuenta();
    }
  };

  return (
    <Fragment>
      <div className='inicioSesion'>
        <div className='cuentaUsuario'>
          <h3>Iniciar sesión</h3>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Ingrese su correo electrónico.'
            onChange={(e) => actualizarDato(e)}
          />
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Ingrese su contraseña.'
            onChange={(e) => actualizarDato(e)}
          />
          <button className='botonSesion' onClick={manejarInicioSesion}>
            Iniciar sesión
          </button>
        </div>
        <div className='cuentaUsuario'>
          <h3>Crea una nueva cuenta</h3>
          <label htmlFor='emailRegistro'>Correo electrónico</label>
          <input
            type='email'
            name='email'
            id='emailRegistro'
            placeholder='Ingrese su correo electrónico.'
            onChange={(e) => actualizarDato(e)}
          />
          <label htmlFor='passwordRegistro'>Contraseña</label>
          <input
            type='password'
            name='password'
            id='passwordRegistro'
            placeholder='Ingrese su contraseña, con mínimo 6 carácteres.'
            onChange={(e) => actualizarDato(e)}
          />
          <p className="cursiva">La contraseña debe tener mínimo 6 carácteres.</p>
          <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
          <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          placeholder='Repite la contraseña para confirmarla.'
          value={confirmarContrasena}
          className={datosSesion.password === confirmarContrasena ? 'confirmar-contrasena-input coincide' : 'confirmar-contrasena-input no-coincide'}
          onChange={(e) => manejarConfirmar(e)}
        />

          <button className='botonSesion' onClick={manejarCrearCuenta}>
            Crear cuenta
          </button>
        </div>
      </div>
      <div className='errorLogin'>{errorUsuario}</div>
    </Fragment>
  );
};

export default Login;

