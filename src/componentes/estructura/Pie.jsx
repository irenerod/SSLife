import React from 'react';
import Caelestis from '../Caelestis/Caelestis';
import useUsuarios from "../../hooks/useUsuarios";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Pie = () => {
  const {sesionIniciada}=useUsuarios();
  return (
    <footer style={{
  
      marginTop:5,
      bottom: 0,
      width: '100%',
      padding: '20px 0',
      backgroundImage: `linear-gradient(45deg, rgba(255, 232, 204, 0.5), rgba(255, 255, 179, 0.5))`,

    }}>

{sesionIniciada && (
      <Caelestis/>
)}
      <div style={{ display: 'flex' }}>
        <Col sm={6} md={4}>
          <h5>Información de interés</h5>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/info">Información</Link></li>
            <li><Link to="/faqs">Preguntas frecuentes</Link></li>
            <li><Link to="/que-me-sucede">¿Qué me sucede?</Link></li>
            <li><Link to="/ayudar">¿Cómo puedo ayudar?</Link></li>
          </ul>
        </Col>
        <Col sm={6} md={4}>
          <h5>Más sobre nuestros profesionales</h5>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/profesionales">Profesionales</Link></li>
            <li><Link to="/privacy-policy">Políticas de privacidad</Link></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contáctanos</h5>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Email: <a href="mailto:creativelife@gmail.com">creativelife@gmail.com</a></li>
            <li>Dirección: C. Jardines, 23, 03600 Elda, Alicante</li>
            <li style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', margin: '28px', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-evenly' }}>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              </div>
            </li>
          </ul>
        </Col>
      </div>
    </footer>
  );
};

export default Pie;

