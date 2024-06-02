import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Irene from '../assets/img/irene3.jpg';
import Pedro from '../assets/img/pedro.jpg'; 
import profesional1 from '../assets/img/profesional1.jpg'; 
import profesional2 from '../assets/img/profesional2.jpg'; 
import profesional3 from '../assets/img/profesional3.jpg'; 
import profesional4 from '../assets/img/profesional4.jpg'; 
import profesional5 from '../assets/img/profesional5.jpg'; 
import profesional6 from '../assets/img/profesional6.jpg'; 
import profesional7 from '../assets/img/profesional7.jpg'; 
import profesional8 from '../assets/img/profesional8.jpg'; 
import profesional9 from '../assets/img/profesional9.jpg'; 
import profesional10 from '../assets/img/profesional10.jpg'; 
import profesional11 from '../assets/img/profesional11.jpg'; 
import profesional12 from '../assets/img/profesional12.jpg'; 
import profesional13 from '../assets/img/profesional13.jpg'; 
import profesional14 from '../assets/img/profesional14.jpg'; 
import Mas_Info from './Mas_Info';
import "../estilos/Nuestro_Equipo.css";

const Nuestro_Equipo = () => {
  return (
    <>
    <div className="container-xxl py-5 mt-5 pt-5">
      <Container>
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Nuestro equipo</h1>
        </div>
        <Row className="g-4">
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={Pedro} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Pedro Sánchez</h5>
                <small>CEO</small>
                <Mas_Info
                  nombre="Pedro Sánchez"
                   descripcion="Lidera nuestra organización con visión y pasión."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={Irene} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Irene Ródenas</h5>
                <small>La jefa</small>
                <Mas_Info
                  nombre="Irene Ródenas"
                   descripcion="Dirige con autoridad y conocimiento profundo del sector."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional13} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Bruno Tomás Sánchez</h5>
                <small>Analítico de datos</small>
                <Mas_Info
                  nombre="Bruno Tomás Sánchez"
                   descripcion="Especialista en convertir datos en estrategias útiles."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional14} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Luis Paolo Sánchez </h5>
                <small>Programador</small>
                <Mas_Info
                  nombre="Luis Paolo Sánchez"
                   descripcion="Desarrolla soluciones innovadoras con código limpio."
                        />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/* Segundo container */}
      <div className="container-xxl py-5">
        <Container>
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Otros Miembros del Equipo</h1>
          </div>
          <Row className="g-4">
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional1} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Josefina Vallealegre</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="Josefina Vallealegre"
                   descripcion="Experta en bienestar emocional y salud mental."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional2} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Dionisia Gutierrez</h5>
                <small>Psicoterapeuta</small>
                <Mas_Info
                  nombre="Dionisio Gutierrez"
                   descripcion="Ayuda a los clientes a encontrar claridad y dirección en sus vidas."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional3} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Inés Alonso</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="Inés Alonso"
                   descripcion="Especializada en terapia cognitivo-conductual."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional4} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Pedro Núñez</h5>
                <small>Psicólogo</small>
                <Mas_Info
                  nombre="Pedro Núñez"
                   descripcion="Trabaja con adolescentes y jóvenes adultos."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional5} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Sofía Martínez</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="Sofía Martínez"
                   descripcion="Especializada en terapia familiar y de pareja."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional6} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Luis Hernández</h5>
                <small>Psicólogo</small>
                <Mas_Info
                  nombre="Luis Hernández"
                   descripcion="Enfocado en la terapia de trauma y estrés postraumático."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional7} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Ana Gómez</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="Ana Gómez"
                   descripcion="Especialista en psicología infantil y adolescente."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional8} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Carlos Rodríguez</h5>
                <small>Psicólogo</small>
                <Mas_Info
                  nombre="Carlos Rodríguez"
                   descripcion="Experto en manejo del estrés y ansiedad."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional9} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">María Fernández</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="María Fernández"
                   descripcion="Especialista en terapia de duelo."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="Nuestro_Equipo-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid Nuestro_Equipo-img" src={profesional10} alt="Nuestro_Equipo Member" />
                <div className="Nuestro_Equipo-social">
                  <Button variant="square" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="square" href="#">
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0">Patricia Ortega</h5>
                <small>Psicóloga</small>
                <Mas_Info
                  nombre="Patricia Ortega"
                   descripcion="Especializada en terapias para el manejo del estrés laboral."
                        />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Nuestro_Equipo;
