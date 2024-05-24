import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { supabaseConexion } from "../../config/supabase";

const Caelestis = () => {
  const [chatHistorial, setChatHistorial] = useState([]);

  // Función para manejar el final del chat (callback)
  const handleEnd = async ({ renderedSteps, steps, values }) => {
    try {
      // Guardar el historial del chat en la base de datos
      const { data, error } = await supabaseConexion.from('caelestis').insert([{ chat_historial: JSON.stringify(chatHistorial) }]);
      
      if (error) {
        throw error;
      } else {
        console.log('Historial del chat guardado en la base de datos');
      }
    } catch (error) {
      console.error('Error al guardar el historial del chat:', error);
    }
  };

  const tema = {
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

  const pasos = [
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

  const floating = true;

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={tema}>
        <ChatBot
          headerTitle="Caelestis"
          handleEnd={handleEnd}
          steps={pasos}
          handleUserInput={(input) => {
            setChatHistorial([...chatHistorial, { type: 'user', message: input }]);
          }}
          handleBotInput={(input) => {
            setChatHistorial([...chatHistorial, { type: 'bot', message: input }]);
          }}
          floating={floating} 
        />
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default Caelestis;
