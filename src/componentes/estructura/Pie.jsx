import React from 'react';
import Caelestis from '../Caelestis/Caelestis';
import useUsuarios from "../../hooks/useUsuarios";
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../estilos/Pie.css'; 
const Pie = () => {
  const { sesionIniciada } = useUsuarios();
  return (
    <footer style={{
      marginTop: 5,
      bottom: 0,
      width: '100%',
      padding: '20px 0',
      backgroundImage: `linear-gradient(45deg, rgba(255, 232, 204, 0.5), rgba(255, 255, 179, 0.5))`,
    }}>
      {sesionIniciada && (
        <Caelestis />
      )}
      <div>
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <h5>Información de interés</h5>
            <ul className="list-unstyled">
              <li><Link to="/info">Información</Link></li>
              <li><Link to="/faqs">Preguntas frecuentes</Link></li>
              <li><Link to="/que-me-sucede">¿Qué me sucede?</Link></li>
              <li><Link to="/ayudar">¿Cómo puedo ayudar?</Link></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
            <h5>Más sobre nuestros profesionales</h5>
            <ul className="list-unstyled">
              <li><Link to="/profesionales">Profesionales</Link></li>
              <li><Link to="/privacy-policy">Políticas de privacidad</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:creativelife@gmail.com">creativelife@gmail.com</a></li>
              <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
              <li className="mt-3">
                <div className="social-icons">
                  <a href="https://www.instagram.com/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                  <a href="https://www.twitter.com/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                  <a href="https://www.facebook.com/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Pie;
