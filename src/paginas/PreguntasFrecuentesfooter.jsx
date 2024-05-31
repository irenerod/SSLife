import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PreguntasFrecuentes = () => {
  return (
    <Container className='p-3 text-center'>
      <Row>
        <Col>
          <h2>¿Qué es SSLife?</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            SSLife es una aplicación diseñada para ayudar a las personas que sufren de bullying y se sienten solas. Proporciona recursos, historias de éxito y una comunidad de apoyo para aquellos que necesitan ayuda y orientación.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>¿Cómo puedo acceder a SSLife?</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Puedes acceder a SSLife descargando la aplicación desde la tienda de aplicaciones de tu dispositivo móvil. Una vez instalada, puedes registrarte y comenzar a utilizar la aplicación para conectarte con otros usuarios y acceder a recursos y apoyo.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>¿Cuáles son las funciones principales de SSLife?</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            SSLife ofrece varias funciones clave, como chat en línea, foros de discusión, recursos educativos, historias de éxito y acceso a profesionales de la salud mental. Estas funciones están diseñadas para ayudarte a conectarte con otras personas que están pasando por situaciones similares y encontrar el apoyo que necesitas.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>¿Es SSLife gratis?</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Sí, SSLife es completamente gratis. No hay costos de suscripción ni cargos ocultos. Queremos que la aplicación esté disponible para cualquier persona que necesite ayuda y apoyo.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PreguntasFrecuentes;
