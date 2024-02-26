import React, { Fragment } from "react";
import "../../estilos/Pie.css";

const Pie = () => {
  return (
    <Fragment>
      <footer>
        <img className="creative" src="https://vcryhsrmqbdvqyvrascb.supabase.co/storage/v1/object/sign/img/Logo%20en%20gris%20sin%20fondo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvTG9nbyBlbiBncmlzIHNpbiBmb25kby5zdmciLCJpYXQiOjE3MDgzNjQzNDIsImV4cCI6MTczOTkwMDM0Mn0.MI8Shr-j9HDqhWA-pp382v4yvqYqY8AvCkbSLltTc48&t=2024-02-19T17%3A39%3A03.028Z" alt="creativelife" />
        <ul>
          <li>Información:</li>
          <li>Contacto: creativeLife@gmail.com</li>
          <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
        </ul>
        </footer>
    </Fragment>
  );
};

export default Pie;
