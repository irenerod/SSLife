import React, { useState } from 'react';
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap';

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

export default Mas_Info;

