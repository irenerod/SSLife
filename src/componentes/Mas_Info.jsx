import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

const Mas_Info = ({ nombre, descripcion }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleButtonClick = () => {
    setIsToastOpen(!isToastOpen);
  };

  const handleToastToggle = () => {
    setIsToastOpen(!isToastOpen);
  };

  return (
    <div>
      <Button variant="success" onClick={handleButtonClick}>
        Más info.
      </Button>
      <br />
      <br />
      <Toast show={isToastOpen} onClose={handleToastToggle}>
        <Toast.Header closeButton>
          <strong className="me-auto">{nombre}</strong>
        </Toast.Header>
        <Toast.Body>
          {descripcion}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Mas_Info;

