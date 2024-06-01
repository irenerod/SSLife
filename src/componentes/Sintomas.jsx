import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';

const Sintomasfooter = () => {
  const [counts, setCounts] = useState({
    bullying: 0,
    soledad: 0,
    depresion: 0
  });

  const sintomas = [
    {
      category: "Síntomas del Bullying",
      key: "bullying",
      items: [
        "Presencia de moretones, heridas o rasguños sin explicación",
        "Cambios en los hábitos alimenticios o el sueño",
        "Falta de interés en las actividades que solía disfrutar",
        "Problemas de concentración o rendimiento académico",
        "Miedo o ansiedad al ir a la escuela o interactuar con ciertas personas",
        "Sentimientos de tristeza, aislamiento o desesperanza",
        "Burlas o insultos constantes",
        "Aislamiento social",
        "Amenazas o intimidación física",
        "Robo o daño a pertenencias"
      ]
    },
    {
      category: "Síntomas de la Soledad",
      key: "soledad",
      items: [
        "Sentimientos persistentes de tristeza, vacío o desesperanza",
        "Sentirse desconectado o aislado de los demás",
        "Cambios en el apetito o peso",
        "Dificultades para concentrarse o tomar decisiones",
        "Pensamientos de autolesión o suicidio",
        "Falta de motivación o entusiasmo por la vida",
        "Alejamiento de actividades sociales",
        "Dificultades para relacionarse con otros",
        "Falta de apoyo emocional",
        "Aislamiento voluntario"
      ]
    },
    {
      category: "Síntomas de la Depresión",
      key: "depresion",
      items: [
        "Sentimientos persistentes de tristeza, desesperanza o vacío",
        "Pérdida de interés en actividades que solía disfrutar",
        "Cambios en el apetito o peso",
        "Problemas para dormir o dormir demasiado",
        "Falta de energía o fatiga constante",
        "Pensamientos recurrentes de muerte o suicidio",
        "Problemas de concentración o memoria",
        "Irritabilidad o cambios en el estado de ánimo",
        "Sentimientos de inutilidad o culpa excesiva",
        "Falta de esperanza en el futuro"
      ]
    }
  ];

  const handleClick = (key) => {
    setCounts({
      ...counts,
      [key]: counts[key] + 1
    });
  };

  const getMessage = (count) => {
    if (count > 5) {
      return <><span style={{ color: 'red', fontSize: '24px', textAlign: 'center', display: 'block' }}>Sufre de esto. Te invitamos a registrarte y usar nuestros recursos.</span></>;
    } else if (count >= 3) {
      return <><span style={{ color: 'orange', fontSize: '24px', textAlign: 'center', display: 'block' }}>Es propenso a sufrir de esto.</span></>;
    } else if (count > 0) {
      return <><span style={{ color: 'green', fontSize: '24px', textAlign: 'center', display: 'block' }}>Lleve cuidado.</span></>;
    } else {
      return "";
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center mb-5 pb-5">Síntomas Comunes</h2>
      <p style={{ fontSize: '20px', textAlign: 'center' }}>Haga clic en los síntomas que experimenta:</p>
      {sintomas.map((category, idx) => (
        <div key={idx} className="mb-5">
          <h3>{category.category}</h3>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Síntoma</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Button
                          variant="link"
                          onClick={() => handleClick(category.key)}
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          {item}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Alert variant="info" style={{ backgroundColor: '#c1e2c1' }}>
                <div style={{ textAlign: 'center' }}>
                  Total de clics: {counts[category.key]}
                  <br />
                  {getMessage(counts[category.key])}
                </div>
              </Alert>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Sintomasfooter;





