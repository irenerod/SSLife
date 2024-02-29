import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
<div className="mt-3" style={{ marginLeft: '20px' }}>
      <h1 className="mb-4">Página en construcción</h1>
      <h5>Contacto</h5>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-2">
          <Label for="emailInput">Correo Electrónico</Label>
          <Input style={{ width: '50%' }}
            type="email"
            id="emailInput"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2">
          <Label for="messageInput">Mensaje</Label>
          <Input style={{ width: '50%' }}
            type="textarea"
            id="messageInput"
            placeholder="Escribe tu mensaje aquí"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" color="primary">Enviar</Button>
      </Form>
    </div>
  );
};

export default Contacto;
