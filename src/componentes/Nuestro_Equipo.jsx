import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Irene from '../assets/img/irene2.jpg'; // CAMBIAR 
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={Pedro} alt="Team Member" />
                <div className="team-social">
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid irene" src={Irene} alt="Team Member" />
                <div className="team-social">
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional13} alt="Team Member" />
                <div className="team-social">
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional14} alt="Team Member" />
                <div className="team-social">
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional1} alt="Team Member" />
                <div className="team-social">
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
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional2} alt="Team Member" />
                <div className="team-social">
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
                   descripcion="Brinda terapia y apoyo para el crecimiento personal."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional6} alt="Team Member" />
                <div className="team-social">
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
                <h5 className="mb-0">Tatiana Macarena</h5>
                <small>Terapeuta de Familia</small>
                <Mas_Info
                  nombre="Tatiana Macarena"
                   descripcion="Especializada en resolver conflictos familiares y mejorar la comunicación."
                        />
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" src={profesional4} alt="Team Member" />
                <div className="team-social">
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
                <h5 className="mb-0">Yvette Duchamp</h5>
                <small>Asistente de Psicología</small>
                <Mas_Info
                  nombre="Yvette Duchamp"
                   descripcion="Apoya en la investigación y en la atención al cliente con profesionalismo."
                        />
              </div>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
       {/* Tercer container */}
<div className="container-xxl py-5">
  <Container>
    <Row className="g-4">
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional10} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">María Gonzalez</h5>
            <small>Neuropsicóloga</small>
            <Mas_Info
              nombre="María Gonzalez"
              descripcion="Especialista en neuropsicología y rehabilitación cognitiva."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional3} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Carlos Ramírez</h5>
            <small>Consejero Psicológico</small>
            <Mas_Info
              nombre="Carlos Ramírez"
              descripcion="Consejero experto en técnicas de afrontamiento y resiliencia."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional7} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Lucía Fernández</h5>
            <small>Terapeuta Ocupacional</small>
            <Mas_Info
              nombre="Lucía Fernández"
              descripcion="Ayuda en la recuperación y adaptación de habilidades diarias."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional8} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Andrés Pérez</h5>
            <small>Psicólogo Clínico</small>
            <Mas_Info
              nombre="Andrés Pérez"
              descripcion="Experto en diagnósticos y tratamiento de trastornos mentales."
            />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>
{/* Cuarto container */}
<div className="container-xxl py-5">
  <Container>
    <Row className="g-4">
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional9} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Ana López</h5>
            <small>Psicóloga Infantil</small>
            <Mas_Info
              nombre="Ana López"
              descripcion="Especialista en desarrollo infantil y apoyo a niños y adolescentes."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional5} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">David Gómez</h5>
            <small>Coach de Vida</small>
            <Mas_Info
              nombre="David Gómez"
              descripcion="Coach de vida enfocado en el logro de objetivos y metas personales."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional11} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Laura Méndez</h5>
            <small>Psicóloga Forense</small>
            <Mas_Info
              nombre="Laura Méndez"
              descripcion="Trabaja en la evaluación y tratamiento de individuos en el sistema legal."
            />
          </div>
        </div>
      </Col>
      <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
        <div className="team-item">
          <div className="overflow-hidden position-relative">
            <Image className="img-fluid" src={profesional12} alt="Team Member" />
            <div className="team-social">
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
            <h5 className="mb-0">Jorge Torres</h5>
            <small>Psicoterapeuta</small>
            <Mas_Info
              nombre="Jorge Torres"
              descripcion="Especialista en psicoterapia individual y grupal para adultos."
            />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>

    </>
  );
};

export default Nuestro_Equipo;


