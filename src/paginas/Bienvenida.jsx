import React from "react";
import { Link } from 'react-router-dom';
import { Carousel, Container, Button } from 'react-bootstrap';
import carousel1 from "../assets/img/carousel-1.jpg";
import carousel2 from "../assets/img/carousel-2.jpg";
import carousel3 from "../assets/img/carousel-3.jpg";
import Testimonios from "../componentes/Testimonios";
import Boton_Contactanos from "../componentes/Contactanos_Boton";

const Bienvenida = () => {
  return (
    <div>
      <Container fluid className="p-0 pb-5 af-height-90 af-max-width mx-auto mt-2">
        <Carousel style={{ width: '100%', height: '100vh' }}> 
          <Carousel.Item>
            <img className="img-fluid" src={carousel1} alt="First slide" style={{ width: '100%', height: '100%' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
              <Container>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Bienvenido a SSLIFE</h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">SSLIFE contra el Bullying y la Soledad:</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Tu refugio contra el bullying y la soledad. Únete a nuestra comunidad para encontrar apoyo, recursos y solidaridad en momentos difíciles. No estás solo... Conéctate.</p>
                    <Button as={Link} to="/sobre" className="btn btn-light py-md-3 px-md-5 me-3 animated slideInLeft">Leer Más</Button>
                    <Button as={Link} to="/inicio-sesion" className="btn btn-success py-md-3 px-md-5 animated slideInRight">Únete</Button>
                  </div>
                </div>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={carousel2} alt="Second slide" style={{ width: '100%', height: '100%' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
              <Container>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Bienvenido a SSLIFE</h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Descubre SSLIFE:</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Donde la empatía se encuentra con la acción. Explora nuestra plataforma y descubre cómo estamos comprometidos a crear un entorno seguro y acogedor para todos.</p>
                    <Button as={Link} to="/sobre" className="btn btn-light py-md-3 px-md-5 me-3 animated slideInLeft">Leer Más</Button>
                    <Button as={Link} to="/inicio-sesion" className="btn btn-success py-md-3 px-md-5 animated slideInRight">Únete</Button>
                  </div>
                </div>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={carousel3} alt="Third slide" style={{ width: '100%', height: '100%' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
              <Container>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Bienvenido a SSLIFE</h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">Encuentra esperanza en SSLIFE:</h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Nuestra plataforma ofrece ayuda profesional, recursos útiles y una comunidad de apoyo para superar los desafíos del bullying y la soledad. Únete hoy y sé parte del cambio.</p>
                    <Button as={Link} to="/sobre" className="btn btn-light py-md-3 px-md-5 me-3 animated slideInLeft">Leer Más</Button>
                    <Button as={Link} to="/inicio-sesion" className="btn btn-success py-md-3 px-md-5 animated slideInRight">Únete</Button>
                  </div>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
        <Testimonios/>
       <Boton_Contactanos/> 
      </Container>
    </div>
  );
};

export default Bienvenida;

