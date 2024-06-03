import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ComoAyudarComp = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h2 className="mb-4">¿Cómo puedes ayudar?</h2>
          <p className="lead">Ofrecer apoyo a alguien que está pasando por situaciones difíciles como el bullying, la depresión o la soledad puede marcar la diferencia en su vida. Aquí hay algunas formas en que puedes ayudar:</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Escucha sin juzgar</h3>
            <p>Ofrece tu atención y apoyo a la persona afectada. A veces, solo necesitan a alguien que los escuche sin juzgarlos.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Brinda tu amistad</h3>
            <p>Demuestra tu solidaridad y amistad. Hazles saber que no están solos y que estás ahí para ellos en cualquier momento.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Comparte recursos</h3>
            <p>Proporciona información sobre recursos y servicios de apoyo disponibles, como líneas de ayuda, grupos de apoyo o profesionales de la salud mental.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Mantén el contacto</h3>
            <p>Envía mensajes de texto, llama o pasa tiempo con la persona afectada para demostrarle que te importa.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Ofrece ayuda práctica</h3>
            <p>Si es posible, ofrece tu ayuda en tareas cotidianas como ir de compras, limpiar la casa o cocinar.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Respeta su privacidad</h3>
            <p>Respeta los límites y la privacidad de la persona afectada. No compartas su información personal sin su consentimiento.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Anima a buscar ayuda profesional</h3>
            <p>Anima a la persona afectada a buscar ayuda profesional si es necesario. Ofrece tu apoyo en el proceso.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Sé comprensivo</h3>
            <p>Trata de entender los sentimientos y experiencias de la persona afectada sin juzgarlos.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Realiza actividades juntos</h3>
            <p>Organiza actividades divertidas o relajantes para ayudar a la persona afectada a distraerse y sentirse mejor.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Ofrece palabras de aliento</h3>
            <p>Envía mensajes positivos y alentadores para levantar el ánimo de la persona afectada en momentos difíciles.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Comparte tus experiencias</h3>
            <p>Comparte tus propias experiencias si has pasado por situaciones similares. Puede ayudar a la persona afectada a sentirse comprendida y menos sola.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Participa en actividades solidarias</h3>
            <p>Participa en actividades solidarias o eventos comunitarios que promuevan la inclusión y el apoyo mutuo.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Ofrece un hombro para llorar</h3>
            <p>Escucha con empatía y ofrece consuelo cuando la persona afectada necesite desahogarse.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Fomenta la autoestima</h3>
            <p>Reconoce las cualidades y fortalezas de la persona afectada. Ayúdalos a desarrollar una imagen positiva de sí mismos.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Ofrece ayuda emocional</h3>
            <p>Proporciona apoyo emocional y comprensión a la persona afectada durante sus momentos difíciles.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="bg-light p-4 rounded text-center">
            <h3>Busca actividades terapéuticas</h3>
            <p>Investiga y sugiere actividades terapéuticas como la meditación, el yoga o la escritura para ayudar a la persona afectada a gestionar sus emociones.</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <p>Si lo deseas, puedes dejarnos tu pregunta y nos pondremos en contacto contigo para ayudarte a ayudar.</p>
          <Link to="/contacto">
            <Button variant="primary">Contáctanos</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ComoAyudarComp;
