import React, { Fragment } from "react";
import Card1 from "../Añadidos/Card1.jsx";
import "../estilos/Inicio.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

const Inicio = () => {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <Fragment>
      <div className="container">
        <div className="inicio">
          <h1>Inicio</h1>
        </div>
        <div className="opciones">
          <div className="exclamacion">
            <img src="./src/assets/img/exclamacion.png" alt="exclamacion" width="500px" />
          </div>
          <div className="opciones-content">
            <Link to="/sobre">
              <div className="sobreSSL">
                <h2>Sobre SSLife</h2>
              </div>
            </Link>
            <Link to="/recursos">
              <div className="recursos">
                <h2>Recursos</h2>
              </div>
            </Link>
            <Link to="/contacto">
              <div className="contacto">
                <h2>Contacta con nosotros</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;