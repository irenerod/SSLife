import React, { Fragment } from "react";
import "../estilos/Recursos.css";
import { Link } from "react-router-dom";
import { Card, CardBody, CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Button } from "react-bootstrap";
const Recursos = () => {
  return (
    <Fragment>
      <div className="contenedor">
        <div className="inicio">
          <img className="logoIni" src="./src/assets/img/Logo SS Life.png" alt="logo" width="100px"/>
          <h1>Recursos</h1>
        </div>
        <div className="opciones">
          <div className="opciones-contenedor">
            <CardGroup>
            <Card
             body
             outline
             style={{
               width: '18rem'
             }}
             >
              <CardImg
                alt="Vídeos"
                src=""
                top
                width="200%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Vídeos
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                Vídeos de apoyo.
                </CardSubtitle>
                <CardText>
                  Edúcate con estos vídeos proporcionados por nuestros expertos.
                </CardText>
                <Button>
                  Entrar
                </Button>
              </CardBody>
            </Card>
            <Card
             body
             outline
             style={{
               width: '18rem'
             }}>
              <CardImg
                alt="Artículos"
                src=""
                top
                width="200%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Artículos
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Artículos educacionales.
                </CardSubtitle>
                <CardText>
                  Lee sobre los distintos temas que te ofrecen nuestros profesionales sobre distintas materias.
                </CardText>
                <Button>
                  Entrar
                </Button>
              </CardBody>
            </Card>
            <Card
             body
             outline
             style={{
               width: '18rem'
             }}>
              <CardImg
                alt="Foros"
                src=""
                top
                width="200%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Foros
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Foros creados por nuestra comunidad.
                </CardSubtitle>
                <CardText>
                  Conecta con otros con las mismas inquietudes que tú.
                </CardText>
                <Button>
                  Entrar
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
          </div>
      </div>
    </div>
     {/*  <div className="contenedor">
        <div className="inicio">
          <img className="logoIni" src="./src/assets/img/Logo SS Life.png" alt="logo" width="100px"/>
          <h1>Recursos</h1>
        </div>
        <div className="opciones">
          <div className="opciones-contenedor">
            <Link to="/articulos">
              <div className="articulos">
                <h2>Artículos</h2>
              </div>
            </Link>
            <Link to="/videos">
              <div className="videos">
                <h2>Videos</h2>
              </div>
            </Link>
            <Link to="/foros">
              <div className="foros">
                <h2>Foro</h2>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Recursos;
