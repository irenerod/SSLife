import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Boton_Contactanos = () => {
    return (
      <div className="container-xxl py-5 mt-5 pt-5">
        <Container className=" text-center mt-5 pt-5">
                <div>
                    <h2>NO ESTÁS SOLO...</h2>
                    <Button variant="success" style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                    <Link to="/Contacto" style={{ color: 'white', textDecoration: 'none' }}>Contáctanos.</Link>
                    </Button>
                </div>
        </Container>
    </div>
    )};
export default Boton_Contactanos;