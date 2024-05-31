import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import team1 from '../assets/img/jovenes-felices.jpg'; 
import team2 from '../assets/img/medicosFelices.jpg'; 
import team3 from '../assets/img/service-2.gif'; 

const NuevoComp = () => {
  return (
    <div style={styles.container}>
      <Carousel className='mt-5 pt-5' interval={1500}>
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h3 style={styles.heading}>¡Únete a SSLife y lucha contra el bullying!</h3>
                  <p style={styles.text}>
                    El bullying es un problema grave que afecta a millones de personas en todo el mundo.
                    Nos sumerge en la soledad, una enfermedad del siglo XXI que debilita nuestro bienestar
                    mental y emocional. En SSLife, creemos que todos merecen un entorno seguro y acogedor.
                    ¡Únete a nuestra comunidad y juntos lucharemos contra el bullying, promoveremos la inclusión
                    y construiremos un futuro más brillante para todos!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <Image className="img-fluid" src={team1} alt="Team Member" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6}>
                <Image className="img-fluid" src={team2} alt="Team Member" />
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h3 style={styles.heading}>El poder de la comunidad</h3>
                  <p style={styles.text}>
                    En SSLife, creemos en el poder de la comunidad para combatir el bullying y la soledad.
                    Nuestra plataforma ofrece un espacio seguro donde puedes conectarte con personas que
                    comparten tus valores y experiencias. Juntos, podemos marcar la diferencia y construir
                    un mundo más amable y compasivo. Por eso te invitamos a que pertenezcas a nuestra comunidad 
                    y experimentarás un paciente respiro.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h3 style={styles.heading}>Cambiemos el mundo juntos</h3>
                  <p style={styles.text}>
                    Únete a SSLife hoy mismo y sé parte del movimiento para erradicar el bullying y la
                    soledad. Cada acción cuenta, y con tu ayuda, podemos crear un futuro donde todos se
                    sientan valorados, respetados y amados. Juntos, podemos cambiar el mundo. Y, por ello, 
                    te invitamos a que te unas a nosotros. Cada aporte es una ayuda importante que, sabemos,
                    hace falta. 
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <Image className="img-fluid" src={team3} alt="Team Member" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const styles = {
  container: {
    margin: '0', // Eliminamos el maxWidth y ajustamos el margen a cero
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
};

export default NuevoComp;







