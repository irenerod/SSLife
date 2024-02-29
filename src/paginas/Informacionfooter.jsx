import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Informacionfooter = () => {
  return (
    <Container style={{ marginBottom: '220px' }}>
      <Row>
        <Col>
          <h2>La Tecnología en la Sociedad Actual</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            La tecnología ha avanzado a un ritmo vertiginoso en las últimas décadas, transformando la manera en que vivimos, trabajamos y nos relacionamos. Desde la comunicación hasta la educación, pasando por la medicina y el entretenimiento, la tecnología ha dejado una huella profunda en todos los aspectos de nuestra vida cotidiana.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El Tecno-Humanismo</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            El tecno-humanismo es una corriente de pensamiento que aboga por la integración armoniosa de la tecnología en la vida humana. Considera que la tecnología puede ser una herramienta poderosa para el bienestar y el progreso de la humanidad, siempre y cuando se utilice de manera ética y responsable.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El Bullying en la Sociedad</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
            El bullying es un problema social que afecta a personas de todas las edades en todo el mundo. Se manifiesta de diferentes formas, como el acoso verbal, el acoso cibernético y el acoso físico. Las consecuencias del bullying pueden ser devastadoras, ya que puede afectar la autoestima, el rendimiento académico y la salud mental de las personas afectadas.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>La Afectación de la Soledad</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginTop: '5px'}}>
            La soledad es un problema creciente en la sociedad moderna, especialmente entre los jóvenes. La soledad puede tener un impacto negativo en la salud física y mental, aumentando el riesgo de desarrollar enfermedades como la depresión y la ansiedad. Es importante fomentar la conexión y la comunidad para contrarrestar los efectos de la soledad.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Informacionfooter;


