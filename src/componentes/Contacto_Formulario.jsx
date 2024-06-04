import React, { useState } from 'react';
import { Form, Button, Col, Modal, Toast } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../assets/img/LogosinFondo.png';
import { Link } from 'react-router-dom';

const Contacto_Formulario = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column mb-5 pb-5">
      <Col md={6} className="mb-4 text-center">
        <motion.img
          src={logo}
          alt="Logo de SSLIFE"
          style={{ width: '60%', maxWidth: '200px', marginTop: '20px' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </Col>
      <Col md={6}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 shadow rounded"
          style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' }}
        >
          <h3 className="mb-4 text-center">¡Contáctanos!</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="emailInput">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                id="emailInput"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="messageInput">Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                id="messageInput"
                placeholder="Escribe tu mensaje aquí"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button 
              type="submit" 
              variant="success" 
              style={{
                width: '100%',
                borderRadius: '8px',
                border: 'none'
              }}
            >
              Enviar Mensaje
            </Button>
          </Form>
          <p className="mt-3 text-center">
            ¿Prefieres una respuesta más rápida? ¡Prueba nuestro chatbot para obtener ayuda instantánea!
          </p>
        </motion.div>
      </Col>
      <Modal show={modalOpen} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje Enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Mensaje enviado con éxito. En breve recibirá una respuesta. Puede seguir disfrutando de nuestra web o pedir ayuda a "Caelestis".</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" className="btn btn-success">Aceptar</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contacto_Formulario;
