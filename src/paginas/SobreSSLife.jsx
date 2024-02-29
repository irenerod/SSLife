import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../assets/img/LogosinFondo.png'; // Importa tu propia imagen bonita

const SobreSSLife = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h4>Ayuda para personas que sufren de bullying</h4>
          <p>
            Esta web ha sido diseñada para proporcionar apoyo a personas que sufren de bullying y se sienten solas. Aquí podrás encontrar recursos, historias de éxito y una comunidad que te apoyará en todo momento.
          </p>
        </Col>
        <Col>
          <img src={Image} alt="Bonita imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default SobreSSLife;
