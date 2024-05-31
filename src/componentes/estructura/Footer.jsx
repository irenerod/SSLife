import React from 'react';
import Caelestis from '../Caelestis/Caelestis';
import useUsuarios from "../../hooks/useUsuarios";
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { sesionIniciada } = useUsuarios();
  return (
    <footer >
      {sesionIniciada && (
        <Caelestis />
      )}
    <div className="bg-warning text-dark py-5 mt-5 pt-5 text-center" 
    style={{
      backgroundColor:"rgb(251 209 73) !important",
    }}>
      <Container>
        <Row className="g-4 " >
          <Col xs={12} sm={6} md={4} className='p-2'>
            <h5>Información de interés</h5>
            <ul className="list-unstyled ">
              <li><Link to="/info" className="text-dark">Información</Link></li>
              <li><Link to="/faqs" className="text-dark">Preguntas frecuentes</Link></li>
              <li><Link to="/que-me-sucede" className="text-dark">¿Qué me sucede?</Link></li>
              <li><Link to="/ayudar" className="text-dark">¿Cómo puedo ayudar?</Link></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} className='p-2'>
            <h5>Más sobre nosotros</h5>
            <ul className="list-unstyled">
              <li><Link to="/profesionales" className="text-dark">Profesionales</Link></li>
              <li><Link to="/avisoLegal" className="text-dark">Aviso Legal</Link></li>
              <li><Link to="/privacy-policy" className="text-dark">Políticas de privacidad</Link></li>
              <li><Link to="/privacy-Cookies" className="text-dark">Políticas de cookies</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className='p-2'>
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:creativelife@gmail.com" className="text-dark">creativelife@gmail.com</a></li>
              <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
              <li className="mt-3">
                <div className="d-flex justify-content-evenly">
                  <a href="https://www.instagram.com/" className="text-dark"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                  <a href="https://www.twitter.com/" className="text-dark"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                  <a href="https://www.facebook.com/" className="text-dark"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
     
        <Row className="mt-4">
          <Col className="text-center text-md-start">
            &copy; <Link to="/" className="text-dark text-decoration-none">SSLIFE</Link>, Todos los derechos reservados.
          </Col>
          <Col className="text-center text-success fst-italic">
            <h4>No estás sólo... contáctanos</h4>
          </Col>
          <Col className="text-center text-md-end">
          <p>
        Diseñado por <a href="https://htmlcodex.com" className="text-dark text-decoration-none">Creative Life, S.L.N.E.</a>
      </p>
      </Col>

        </Row>
      </Container>

    </div>
  </footer>
  );
};

export default Footer;


