import React, { useState } from 'react';
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap';

const Leer_mas = ({ nombre, descripcion }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleButtonClick = () => {
    setIsToastOpen(!isToastOpen);
  };

  const handleToastToggle = () => {
    setIsToastOpen(!isToastOpen);
  };

  return (
    <div>
      <Button color="success" onClick={handleButtonClick}>
        Más info.
      </Button>
      <br />
      <br />
      <Toast isOpen={isToastOpen}>
        <ToastHeader toggle={handleToastToggle}>
          {nombre}
        </ToastHeader>
        <ToastBody>
          {descripcion}
        </ToastBody>
      </Toast>
    </div>
  );
};

export default Leer_mas;

