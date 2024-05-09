
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

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
    //trigger: '4',
    trigger: '7',
  },
 /*  {
    id: '4',
    message: '¿A quién quieres enviar tu carta?',
    trigger: '5',
  },
  {
    id: '5',
    message: '¿Qué quieres decirle?',
    trigger: '6',
  },
  {
    id: '6',
    message: '¿A quién quieres enviar tu carta?',
    trigger: '7',
  }, */
  {
    id: '7',
    message: 'Perfecto.',
    end: true,
  },
];

const Caelestis = () => (
  <ThemeProvider theme={theme}>
    <ChatBot
      headerTitle="Caelestis"
      steps={steps}
      floating={true}
      />;
  </ThemeProvider>
);

export default Caelestis;
