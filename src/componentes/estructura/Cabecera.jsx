import React, { Fragment } from "react";
import InicioSesion from "./InicioSesion";
import "../../estilos/Cabecera.css";

const Cabecera = () => {
  return (
    <Fragment>
      <header>
        <div className="cabecera">
          <img className="logo" src="https://vcryhsrmqbdvqyvrascb.supabase.co/storage/v1/object/sign/img/SSLife.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvU1NMaWZlLnBuZyIsImlhdCI6MTcwODQ0MzAwMCwiZXhwIjoxNzM5OTc5MDAwfQ.1Hu40oiBop3e4nDeGrnUn9DeLq65BlFjRQsb-FdsavM&t=2024-02-20T15%3A30%3A00.753Z" alt="logo"></img>
        </div>
        <div className='inicioSesion'>
          <InicioSesion/>
        </div>
      </header>
    </Fragment>
  );
};

export default Cabecera;
