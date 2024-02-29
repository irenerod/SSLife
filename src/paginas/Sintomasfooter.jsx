import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Sintomasfooter = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <Container style={{ width: '100%', maxWidth: '900px' }}>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Síntomas del Bullying</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
              El bullying puede manifestarse de diferentes maneras y puede tener un impacto duradero en la víctima. Aquí hay algunos síntomas comunes que pueden indicar que alguien está siendo víctima de bullying:
            </p>
            <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Presencia de moretones, heridas o rasguños sin explicación</li>
              <li>Cambios en los hábitos alimenticios o el sueño</li>
              <li>Falta de interés en las actividades que solía disfrutar</li>
              <li>Problemas de concentración o rendimiento académico</li>
              <li>Miedo o ansiedad al ir a la escuela o interactuar con ciertas personas</li>
              <li>Sentimientos de tristeza, aislamiento o desesperanza</li>
            </ul>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Síntomas de la Soledad</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
              La soledad puede tener un impacto significativo en la salud mental y emocional de una persona. Algunos síntomas comunes de la soledad pueden incluir:
            </p>
            <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Sentimientos persistentes de tristeza, vacío o desesperanza</li>
              <li>Sentirse desconectado o aislado de los demás</li>
              <li>Cambios en el apetito o peso</li>
              <li>Dificultades para concentrarse o tomar decisiones</li>
              <li>Pensamientos de autolesión o suicidio</li>
              <li>Falta de motivación o entusiasmo por la vida</li>
            </ul>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Síntomas de la Depresión</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
              La depresión es una enfermedad mental común que puede tener un impacto significativo en la vida de una persona. Algunos síntomas comunes de la depresión pueden incluir:
            </p>
            <ul style={{ fontSize: '18px', lineHeight: '1.6', paddingLeft: '20px' }}>
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
    </div>
  );
};

export default Sintomasfooter;

