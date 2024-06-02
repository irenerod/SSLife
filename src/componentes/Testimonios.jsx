import React from 'react';
import { Container, Row, Col, Image, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import David from '../assets/img/David.jpg'; 
import Ana from '../assets/img/Ana.jpg';  
import Pablo from '../assets/img/pablo.jpg'; 

const Testimonios = () => {
    return (
      <div className="container-xxl py-5 mt-5 pt-5">
        <Container>
          <div className="section-title text-center">
            <h1 className="display-5 mb-5"> -  Testimonios  - </h1>
          </div>
          <style>{`
            .carousel-control-prev-icon, .carousel-control-next-icon {
              filter: invert(108%);}
              .carousel-indicators{display:none}
            
          `}</style>
          <Carousel interval={2000}>
            <Carousel.Item className="text-center mt-5 pt-5">
              <Image
                className="img-fluid bg-light p-2 mx-auto mb-3"
                src={David}
                style={{ width: '150px', height: '150px' }}
                roundedCircle
              />
              <div className="testimonial-text text-center p-4" style={{ border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#FFFAFA' }}>
                <p>
                "SSLIFE me dio una plataforma para conectarme con personas que comparten mis intereses. Ahora, puedo hablar con otros chicos y chicas que entienden lo que estoy pasando. No me siento solo ni acosado como antes. Gracias a esta comunidad, me siento más seguro y apoyado".
                </p>
                <h5 className="mb-1">David</h5>
                <span className="fst-italic">14 años</span>
              </div>
            </Carousel.Item>
            <Carousel.Item className="text-center mt-5 pt-5">
              <Image
                className="img-fluid bg-light p-2 mx-auto mb-3"
                src={Ana}
                style={{ width: '150px', height: '150px' }}
                roundedCircle
              />
              <div className="testimonial-text text-center p-4" style={{ border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#FFFAFA' }}>
                <p>
                "Desde que encontré SSLIFE, he descubierto que no estoy sola en mi lucha contra el acoso. Compartir experiencias con otros chicos y chicas me ha dado fuerza y me ha ayudado a superar momentos difíciles. Ahora, tengo una red de apoyo en la que puedo confiar".
                </p>
                <h5 className="mb-1">Ana</h5>
                <span className="fst-italic">16 años</span>
              </div>
            </Carousel.Item>
            <Carousel.Item className="text-center mt-5 pt-5">
              <Image
                className="img-fluid bg-light p-2 mx-auto mb-3"
                src={Pablo}
                style={{ width: '150px', height: '150px' }}
                roundedCircle
              />
              <div className="testimonial-text text-center p-4" style={{ border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#FFFAFA' }}>
                <p>
                "Antes me sentía invisible en la escuela, pero SSLIFE me mostró que hay personas dispuestas a escucharme y ayudarme. Hablar con chicos y chicas que han pasado por lo mismo me ha dado valor para enfrentar el bullying. Ahora, sé que no estoy solo y que siempre hay ayuda".
                </p>
                <h5 className="mb-1">Pablo</h5>
                <span className="fst-italic">13 años</span>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  };
  
  export default Testimonios;
