import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import Sintomas from "../componentes/Sintomas.jsx"

const Sintomasfooter = () => {
  return (
    <Container className='my-5'>
      <Sintomas></Sintomas>
    </Container>
  );
};

export default Sintomasfooter;

