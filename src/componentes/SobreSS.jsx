import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importa animaciones de Framer Motion
import logo from '../assets/img/LogosinFondo.png'; // Importa tu logotipo aquí

const SobreSS = () => {
  return (
    <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Row className="align-items-center">
        <Col md={6}>
        <motion.img
  src={logo}
  alt="Logo de SSLIFE"
  style={{ width: '160%', maxWidth: '400px' }}
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
/>

        </Col>
        <Col md={6}>
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '20px' }}
  >
    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>¿Qué es SSLIFE?</h2>
    <p>SSLIFE es una plataforma online diseñada para brindar apoyo y recursos a personas que sufren de bullying y soledad. Nuestro objetivo es crear una comunidad segura y solidaria donde los usuarios puedan conectarse, compartir experiencias y recibir ayuda profesional.</p>
    <h3 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '10px' }}>¿Cómo puede ayudarte SSLIFE?</h3>
    <p>En SSLIFE, ofrecemos una variedad de servicios y recursos para ayudarte a superar el bullying y la soledad:</p>
    <ul>
      <li>Foros de discusión moderados por profesionales donde puedes compartir tus experiencias y recibir consejos de otros usuarios.</li>
      <li>Chat en línea con asesoramiento profesional disponible las 24 horas del día, los 7 días de la semana.</li>
      <li>Artículos y recursos educativos sobre el bullying, la soledad y la salud mental.</li>
      <li>Grupos de apoyo y actividades en línea para conectar con personas que comparten tus intereses y experiencias.</li>
    </ul>
    

          <Button variant="success" style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        <Link to="/Contacto" style={{ color: 'white', textDecoration: 'none' }}>Pregúnanos lo que quieras.</Link>
      </Button>

     </motion.div>
      </Col>

      </Row>
    </Container>
  );
}

export default SobreSS;


