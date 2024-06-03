import React, { useState } from 'react';
import { Card, Collapse, Row, Col, Container } from 'react-bootstrap';

const PreguntasFrecuentes = () => {
  const [open, setOpen] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Qué es SSLife?",
      respuesta: "SSLife es una aplicación diseñada para ayudar a las personas que sufren de bullying y se sienten solas. Proporciona recursos, historias de éxito y una comunidad de apoyo para aquellos que necesitan ayuda y orientación."
    },
    {
      pregunta: "¿Cómo puedo acceder a SSLife?",
      respuesta: "Puedes acceder a SSLife descargando la aplicación desde la tienda de aplicaciones de tu dispositivo móvil. Una vez instalada, puedes registrarte y comenzar a utilizar la aplicación para conectarte con otros usuarios."
    },
    {
      pregunta: "¿Cuáles son las funciones principales de SSLife?",
      respuesta: "SSLife ofrece varias funciones clave, como chat en línea, foros de discusión, recursos educativos, historias de éxito y acceso a profesionales de la salud mental."
    },
    {
      pregunta: "¿Es SSLife gratis?",
      respuesta: "Sí, SSLife es completamente gratis. No hay costos de suscripción ni cargos ocultos. Queremos que la aplicación esté disponible para cualquier persona que necesite ayuda y apoyo."
    },
    {
      pregunta: "¿Cómo puedo reportar un problema?",
      respuesta: "Puedes reportar un problema en SSLife yendo a la sección de 'Ayuda' dentro de la aplicación y seleccionando 'Reportar un problema'. Nuestro equipo de soporte se pondrá en contacto contigo lo antes posible."
    },
    {
      pregunta: "¿Puedo mantener mi identidad anónima en SSLife?",
      respuesta: "Sí, SSLife permite que los usuarios mantengan su identidad anónima para proteger su privacidad. Puedes interactuar con otros usuarios y acceder a recursos sin revelar información personal."
    },
    {
      pregunta: "¿Qué tipos de recursos están disponibles en SSLife?",
      respuesta: "SSLife ofrece una variedad de recursos, incluyendo artículos educativos, videos motivacionales, acceso a grupos de apoyo y la posibilidad de contactar a profesionales de la salud mental."
    },
    {
      pregunta: "¿Cómo puedo contactar a un profesional de la salud mental?",
      respuesta: "Puedes contactar a un profesional de la salud mental a través de SSLife en la sección de 'Asesoría'. Aquí encontrarás una lista de profesionales disponibles para ayudarte."
    },
    {
      pregunta: "¿Puedo compartir mi historia en SSLife?",
      respuesta: "Sí, SSLife permite a los usuarios compartir sus historias de éxito y experiencias personales. Puedes hacerlo en la sección de 'Historias' y ayudar a otros que están pasando por situaciones similares."
    }
  ];

  const colors = ["#b3e6b3", "#cce6ff", "#ffcccc", "#ffe6cc"]; // Ojo, estos son los colores del fondo: Verde claro, Azul claro, Rojo claro, Naranja claro

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const styles = {
    puzzleButton: {
      position: 'relative',
      display: 'block',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      margin: '10px 0',
      width: '100%',
      textTransform: 'uppercase',
    },
    puzzleButtonBefore: {
      content: '""',
      position: 'absolute',
      background: 'inherit',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    puzzleButtonAfter: {
      content: '""',
      position: 'absolute',
      background: 'inherit',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      bottom: '-10px',
      right: '50%',
      transform: 'translateX(50%)'
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center mb-5 pb-5">PREGUNTAS FRECUENTES</h2>
      <Row>
        {preguntas.map((item, index) => (
          <Col md={6} lg={4} className="mb-3" key={index}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => toggleOpen(index)}
                  aria-controls={`pregunta-${index}`}
                  aria-expanded={open === index}
                  style={{
                    ...styles.puzzleButton,
                    backgroundColor: colors[index % colors.length],
                  }}
                  className="puzzle-button"
                >
                  {item.pregunta}
                </button>
              </Card.Header>
              <Collapse in={open === index}>
                <div id={`pregunta-${index}`}>
                  <Card.Body>{item.respuesta}</Card.Body>
                </div>
              </Collapse>
            </Card>
          </Col>
        ))}
      </Row>
      <style>
        {`
          .puzzle-button:before, .puzzle-button:after {
            content: "";
            position: absolute;
            background: inherit;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          
          .puzzle-button:before {
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .puzzle-button:after {
            bottom: -10px;
            right: 50%;
            transform: translateX(50%);
          }
        `}
      </style>
    </Container>
  );
};

export default PreguntasFrecuentes;



