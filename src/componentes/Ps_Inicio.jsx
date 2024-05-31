

import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from "../assets/img/jovenes-felices.jpg";

const Ps_Inicio = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <Container className="about px-lg-0">
        <Row className="g-0 mx-lg-0">
          <Col lg={6} className="ps-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <Image className="position-absolute img-fluid w-100 h-100" src={imagen1} style={{ objectFit: 'cover' }} alt="" />
            </div>
          </Col>
          <Col lg={6} className="about-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">¿Qué es SSLife?</h1>
              </div>
              <p className="mb-4 pb-2">
                SSLife nace con un único propósito: Restaurar la felicidad en la vida de las personas. Cada vez son más las personas que usan esta aplicación. 
                Gracias a ellos, sabemos que lo hemos logrado. Hemos sido uno de vosotros. La vida, injusta a veces, risueña otras,
                son etapas que hay que ir superando. A veces, es complicado superar los avatares que esta nos presenta. Nos sentimos solos, sin rumbo; pensamos 
                la sonrisa que dibujan la cara de los demás jamás volverá a estar en la nuestra. Por este motivo, y para demostrarte que podemos ayudarte, nace
                SSLife. Porque no estás solo... conéctate. 
              </p>
              <Row className="g-4 mb-4 pb-2">
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-users fa-2x text-success"></i>
                    </div>
                    <div className="ms-3">
                      <h2 className="text-success mb-1" data-toggle="counter-up">1477</h2>
                      <p className="fw-medium mb-0">Usuarios felices</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-check fa-2x text-success"></i>
                    </div>
                    <div className="ms-3">
                      <h2 className="text-success mb-1" data-toggle="counter-up">238</h2>
                      <p className="fw-medium mb-0">Profesionales integrados</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="section-second_title text-start">
                <h3 className="display-5 mb-8">Tú puedes ser el próximo.</h3>
              </div>
              <Button href="" className="btn btn-success py-3 px-5">Únete</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ps_Inicio;