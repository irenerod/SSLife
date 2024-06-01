import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const InformacionFooter = () => {
  const sections = [
    {
      title: "La Tecnología en la Sociedad Actual",
      content: "La tecnología ha avanzado a un ritmo vertiginoso en las últimas décadas, transformando la manera en que vivimos, trabajamos y nos relacionamos. Desde la comunicación hasta la educación, pasando por la medicina y el entretenimiento, la tecnología ha dejado una huella profunda en todos los aspectos de nuestra vida cotidiana. Hoy en día, es casi imposible imaginar una vida sin los dispositivos electrónicos que utilizamos a diario. La tecnología ha permitido grandes avances en todos los campos, desde la medicina hasta la comunicación, facilitando nuestras vidas y proporcionando soluciones a problemas complejos.",
      imageUrl: "https://technocio.com/wp-content/uploads/2021/02/Infraestructura.jpg"
    },
    {
      title: "El Tecno-Humanismo",
      content: "El tecno-humanismo es una corriente de pensamiento que aboga por la integración armoniosa de la tecnología en la vida humana. Considera que la tecnología puede ser una herramienta poderosa para el bienestar y el progreso de la humanidad, siempre y cuando se utilice de manera ética y responsable. En el tecno-humanismo, se busca balancear los beneficios tecnológicos con la esencia y necesidades humanas, promoviendo una evolución conjunta y equilibrada.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=900&q=80"
    },
    {
      title: "El Bullying en la Sociedad",
      content: "El bullying es un problema social que afecta a personas de todas las edades en todo el mundo. Se manifiesta de diferentes formas, como el acoso verbal, el acoso cibernético y el acoso físico. Las consecuencias del bullying pueden ser devastadoras, ya que puede afectar la autoestima, el rendimiento académico y la salud mental de las personas afectadas. Combatir el bullying requiere la colaboración de todos: instituciones, familias y la sociedad en general. Solo a través de la educación y la concienciación podemos aspirar a erradicar esta problemática.",
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?fit=crop&w=900&q=80"
    },
    {
      title: "La Afectación de la Soledad",
      content: "La soledad es un problema creciente en la sociedad moderna, especialmente entre los jóvenes. La soledad puede tener un impacto negativo en la salud física y mental, aumentando el riesgo de desarrollar enfermedades como la depresión y la ansiedad. Es importante fomentar la conexión y la comunidad para contrarrestar los efectos de la soledad. Iniciativas comunitarias y plataformas de apoyo pueden ser fundamentales para ayudar a aquellos que se sienten solos, proporcionando un espacio para la interacción y el apoyo mutuo.",
      imageUrl: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uL49Ab_zmyI5DNIFQ0Ir9ZTSyWr9t09V59D_Uc3b4iFOyQkFCcnn--08d7GYldhbGQ-hYdb6P2r-HbwPyfE5A1XtWCU1IqnCCABOVMHbXhaOyeY9oVWodg7Pjd1UjvM4WYWwoaTjiBXrS_TvD0I3eWkhcfsnyqDak=s0-d"
    },
  ];

  return (
    <Container fluid className="py-5 bg-light">
      {sections.map((section, index) => (
        <Row key={index} className="justify-content-center mb-5">
          <Col xs={12} lg={10} className="p-0">
            <Card className="shadow-sm border-0 h-100 mb-4" style={{ width: '100%' }}>
              <Row noGutters className="h-100 align-items-center">
                <Col md={4} className="p-0">
                <Image
                src={section.imageUrl}
                alt={section.title}
                fluid
                className="h-100 w-100"
                style={{ objectFit: 'cover', marginLeft: '10px' }} 
                />
                </Col>
                <Col md={8} className="p-4 d-flex align-items-center">
                  <Card.Body>
                    <Card.Title className="mb-3 text-primary text-center">{section.title}</Card.Title>
                    <Card.Text style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center' }}>
                      {section.content}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default InformacionFooter;





