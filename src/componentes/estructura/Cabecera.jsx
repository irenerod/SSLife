import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import "../../estilos/Cabecera.css";

const Cabecera = () => {
  return (
    <Fragment>
      <header>
        <div className="cabecera">
          <img className="logo" src="https://vcryhsrmqbdvqyvrascb.supabase.co/storage/v1/object/sign/img/Logo%20SS%20Life.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvTG9nbyBTUyBMaWZlLnBuZyIsImlhdCI6MTcwODM2NDE3NiwiZXhwIjoxNzM5OTAwMTc2fQ.nzTGQOsBhhQWid9MIsakio_2qJnALw9lRkRuRLECE5c&t=2024-02-19T17%3A36%3A16.460Z" alt="logo"></img>
        </div>
        <div className='inicioSesion'>
          <InicioSesion/>
        </div>
      </header>
    </Fragment>
  );
};

export default Cabecera;
