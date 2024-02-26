import React, { Fragment } from "react";
import "../estilos/Bienvenida.css";
import { Link } from 'react-router-dom';

const Bienvenida = () => {
  return (
    <Fragment>
      <div className="bienvenida">
        <div className="textoBienvenida">
          <p>No estás <a className="rojo">solo</a>...</p>
          <p>Conéctate.</p>
        </div>
        <img className="imgBienvenda" src="https://vcryhsrmqbdvqyvrascb.supabase.co/storage/v1/object/sign/img/paisaje.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvcGFpc2FqZS5wbmciLCJpYXQiOjE3MDgzNjQ1ODgsImV4cCI6MTczOTkwMDU4OH0.7fxBucMcE5dmr5kPv5jX5JtWegoxx7phhXJ3qkjFAVA&t=2024-02-19T17%3A43%3A08.526Z" alt="bienvenida"/>
        <div className="buttonContainer">
          <Link to="inicio">
            <button type="button">Descubre más</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Bienvenida;
