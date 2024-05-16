import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

const theme = {
  background: '#e1f1c4',
  fontFamily: 'sans-serif',
  headerBgColor: '#729c25',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#a5bc7c',
  botFontColor: '#fff',
  userBubbleColor: '#96c9a8',
  userFontColor: '#fff',
};

const steps = [
  {
    id: 'intro',
    message: 'Bienvenid@ a SSLife, soy Caelestis.',
    trigger: '1',
  },
  {
    id: '1',
    message: '¿Cómo te llamas?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: '¡Hola {previousValue}, un placer conocerte!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'Ahora puedes escribir una carta dirigida a quién tú quieras.',
    trigger: '5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'Carta enviada: {previousValue}',
    trigger: '7',
  },
  {
    id: '7',
    message: 'Espero poder haber sido de ayuda y que te sientas mejor compartiendo esa carta conmigo.',
    trigger: '8',
  },
  {
    id: '8',
    message: 'Recuerda que no estás solo. Nos vemos pronto.',
    end: true,
  },
];

const Caelestis = () => {
  const floating = true;

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Caelestis"
          steps={steps}
          floating={floating} 
        />
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default Caelestis;
