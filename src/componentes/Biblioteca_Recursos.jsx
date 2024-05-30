import React from 'react';
import { Container, Row, Col, Card, Button,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from "../assets/Img/jovenes-felices.jpg";
    
    const Biblioteca_Recursos = () => {
      return (
        <div className="container-xxl py-5">
          <Container>
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Recursos que puedes utilizar</h1>
            </div>
            <Row className="g-4">
              {[
             
                {
                  
                  imgSrc: 'img/service-1.jpg',
                  title: 'Videos',
                  description: 'Acceda a vídeos dónde profesionales podrár darte una nueva visión de lo que ocurre a tu alrrededor. Te van a encantar.',
                  delay: '0.1s'
                },
                {
                  imgSrc: 'img/service-2.jpg',
                  title: 'Conferencias',
                  description: 'Hemos escogido las mejores conferencias de profesionales que te acompañarán y no te sentirás solo. Sólo escuchándolas disfrutarás de los resultados.',
                  delay: '0.3s'
                },
                {
                  imgSrc: 'img/service-3.jpg',
                  title: 'Textos',
                  description: 'Accede a una amplia gama de artículos de profesionales que tratan diversos temas que pueden ayudarte a tí o a los tuyos. Puedes leer los que quieras.',
                  delay: '0.5s'
                },
                {
                  imgSrc: 'img/service-4.jpg',
                  title: 'Informes',
                  description: 'Aquí podrás ver que hay más personas como tú. En tu misma situación. Ellos y Ellas están en el camino. No estás solo. ',
                  delay: '0.1s'
                },
                {
                  imgSrc: 'img/service-5.jpg',
                  title: 'Autoayuda',
                  description: 'En esta sección abordaremos el primer pilar de la felicidad: la autoestima. Accede a manuales, guías y libros gratuítos para que puedas empezar hoy mismo con tu cambio.',
                  delay: '0.3s'
                },
                {
                  imgSrc: 'img/service-6.jpg',
                  title: 'Foros',
                  description: '¿Sábes que hay más personas como tú que pueden acompañarte? ¿Te atreves a contactar con ellos?. No estás solo... conéctate.',
                  delay: '0.5s'
                }
              ].map((service, index) => (
                <Col key={index} md={6} lg={4} className="wow fadeInUp" data-wow-delay={service.delay}>
                  <Card className="service-item border-0">
                    <div className="overflow-hidden">
                      <Card.Img variant="top" src={service.imgSrc} alt="" className="img-fluid" />
                    </div>
                    <Card.Body className="p-4 text-center border border-5 border-light border-top-0">
                      <Card.Title className="mb-3">{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                      <Button variant="link" className="fw-medium">
                        Leer más <i className="fa fa-arrow-right ms-2"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    };
    
    export default Biblioteca_Recursos;
    
