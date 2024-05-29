import React from 'react';
import Caelestis from './Caelestis/Caelestis';
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} sm={6} md={4}>
            <h5>Información de interés</h5>
            <ul className="list-unstyled">
              <li><Link to="/info" className="text-light">Información</Link></li>
              <li><Link to="/faqs" className="text-light">Preguntas frecuentes</Link></li>
              <li><Link to="/que-me-sucede" className="text-light">¿Qué me sucede?</Link></li>
              <li><Link to="/ayudar" className="text-light">¿Cómo puedo ayudar?</Link></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h5>Más sobre nuestros profesionales</h5>
            <ul className="list-unstyled">
              <li><Link to="/profesionales" className="text-light">Profesionales</Link></li>
              <li><Link to="/privacy-policy" className="text-light">Políticas de privacidad</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:creativelife@gmail.com" className="text-light">creativelife@gmail.com</a></li>
              <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
              <li className="mt-3">
                <div className="d-flex justify-content-between">
                  <a href="https://www.instagram.com/" className="text-light"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                  <a href="https://www.twitter.com/" className="text-light"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                  <a href="https://www.facebook.com/" className="text-light"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button color="primary" className="me-3"><Link to="/contacto" className="text-light text-decoration-none">Contacto</Link></Button>
            <Button color="success"><Link to="/chatbot" className="text-light text-decoration-none">¡Pruébame, soy un chatbot!</Link></Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            &copy; <Link to="/" className="text-light text-decoration-none">Tu Nombre de Sitio</Link>, Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        Diseñado por <a href="https://htmlcodex.com" className="text-light text-decoration-none">HTML Codex</a>
      </div>
    </div>
  );
};

export default Footer;


