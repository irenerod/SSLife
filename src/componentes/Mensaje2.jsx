import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import logo from '../assets/img/LogosinFondo.png';


const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    // Lógica para enviar el formulario
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
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
    </div>
  );
};

export default ContactForm;

