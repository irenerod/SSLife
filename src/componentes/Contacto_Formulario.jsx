import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { motion } from 'framer-motion';
import logo from '../assets/img/LogosinFondo.png';
import { Link } from 'react-router-dom';

const Contacto_Formulario = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Clave de recuperacion:  WQKEXBYGDF1KHC4EFLP2VLFN  --> no borrar, por favor.
    // Lógica para enviar el formulario.
    // Nos hemos registrado en Twilio.com pero aún no conseguimos hacer los endpoints. 
    // La cuenta usada para registrarnos ha sido la mia (psflores79@gmail.com).
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
            <FormGroup className="mb-3">
              <Label for="emailInput">Correo Electrónico</Label>
              <Input
                type="email"
                id="emailInput"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="messageInput">Mensaje</Label>
              <Input
                type="textarea"
                id="messageInput"
                placeholder="Escribe tu mensaje aquí"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
            <Button 
              type="submit" 
              color="success" 
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
      {/* Modal para mostrar el mensaje de éxito */}
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Mensaje Enviado</ModalHeader>
        <ModalBody>
          <p>Mensaje enviado con éxito. En breve recibirá una respuesta. Puede seguir disfrutando de nuestra web o pedir ayuda a "Caelestis".</p>
        </ModalBody>
        <ModalFooter>
          <Link to="/" className="btn btn-success">Aceptar</Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Contacto_Formulario;



