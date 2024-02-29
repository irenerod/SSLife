import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Sintomasfooter = () => {
  return (
    <Container style={{ width: 'auto' }}>
      <Row>
        <Col>
          <h2>Síntomas del Bullying</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            El bullying puede manifestarse de diferentes maneras y puede tener un impacto duradero en la víctima. Aquí hay algunos síntomas comunes que pueden indicar que alguien está siendo víctima de bullying:
          </p>
          <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
            <li>Presencia de moretones, heridas o rasguños sin explicación</li>
            <li>Cambios en los hábitos alimenticios o el sueño</li>
            <li>Falta de interés en las actividades que solía disfrutar</li>
            <li>Problemas de concentración o rendimiento académico</li>
            <li>Miedo o ansiedad al ir a la escuela o interactuar con ciertas personas</li>
            <li>Sentimientos de tristeza, aislamiento o desesperanza</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Síntomas de la Soledad</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            La soledad puede tener un impacto significativo en la salud mental y emocional de una persona. Algunos síntomas comunes de la soledad pueden incluir:
          </p>
          <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
            <li>Sentimientos persistentes de tristeza, vacío o desesperanza</li>
            <li>Sentirse desconectado o aislado de los demás</li>
            <li>Cambios en el apetito o peso</li>
            <li>Dificultades para concentrarse o tomar decisiones</li>
            <li>Pensamientos de autolesión o suicidio</li>
            <li>Falta de motivación o entusiasmo por la vida</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Síntomas de la Depresión</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            La depresión es una enfermedad mental común que puede tener un impacto significativo en la vida de una persona. Algunos síntomas comunes de la depresión pueden incluir:
          </p>
          <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
            <li>Sentimientos persistentes de tristeza, desesperanza o vacío</li>
            <li>Pérdida de interés en actividades que solía disfrutar</li>
            <li>Cambios en el apetito o peso</li>
            <li>Problemas para dormir o dormir demasiado</li>
            <li>Falta de energía o fatiga constante</li>
            <li>Pensamientos recurrentes de muerte o suicidio</li>
            <li>Problemas de concentración o memoria</li>
            <li>Irritabilidad o cambios en el estado de ánimo</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Sintomasfooter;

