import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../assets/img/LogosinFondo.png';

const SobreSSLife = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col className="d-flex align-items-center">
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Ayuda para personas que sufren de bullying</h4>
            <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>
              Esta web ha sido diseñada para proporcionar apoyo a personas que sufren de bullying y se sienten solas. Aquí podrás encontrar recursos, historias de éxito y una comunidad que te apoyará en todo momento.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="d-flex justify-content-center">
          <img src={Image} alt="Bonita imagen" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default SobreSSLife;
