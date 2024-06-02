import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  .main-heading {
    color: green;
    text-align: center;
    margin-bottom: 20px;
  }
  .section-heading {
    color: red;
    margin-top: 20px;
  }
  .sub-heading {
    color: blue;
  }
  .highlight {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
  }
  .contact-info {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .btn-custom {
    background-color: #007bff;
    border: none;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const AvisoLegal = () => {
  return (
    <StyledContainer className="mt-5 pt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Row>
            <Col>
              <h1 className="main-heading">Aviso legal</h1>
              <h2 className="section-heading">1. Identificación del titular del sitio web:</h2>
              <div className="contact-info">
                <p>
                  La entidad responsable del tratamiento de los datos recabados a través del Sitio Web{' '}
                  <a href="https://www.creativelife.com/">https://www.creativelife.com/</a> es Creative Life, Empresa de Diseño Web, S.L.N.E. (en adelante, “CREATIVE LIFE”).
                </p>
                <p><strong>Titularidad:</strong></p>
                <p><strong>Nombre del titular/responsable:</strong> Creative Life, Empresa de Diseño Web, S.L.N.E. (en adelante, “CREATIVE LIFE”).</p>
                <p><strong>Domicilio:</strong> Calle Jardines, 23. Distrito Centro. Elda. Vinalopó Mitjà, Alicante.</p>
                <p><strong>Email:</strong> <a href="mailto:info@creativelife.com">info@creativelife.com</a> o <a href="mailto:info@sslife.com">info@sslife.com</a></p>
                <p><strong>Teléfonos:</strong> 966954823 y 966957677</p>
                <p><strong>CIF:</strong> B12345678</p>
                <p><strong>Datos inscripción registro mercantil:</strong> Inscrita en el Registro Mercantil de Alicante al tomo 3102, libro 0, folio 72, sección 8ª, hoja A123456, inscripción 1.</p>
                <p>Puedes contactar de forma directa y efectiva con CREATIVE LIFE en relación con la presente política de privacidad en la dirección de correo electrónico <a href="mailto:info@creativelife.com">info@creativelife.com</a> o <a href="mailto:info@sslife.com">info@sslife.com</a>.</p>
              </div>
              
              <h2 className="section-heading">2. El Sitio Web</h2>
              <div className="highlight">
                <p>CREATIVE LIFE a través del Sitio Web se dedica a ofrecer servicios de diseño web y otros relacionados con la creatividad y el diseño. El sitio web proporciona información sobre los servicios ofrecidos por CREATIVE LIFE y posiblemente una tienda online para adquirir productos relacionados con el diseño web y la creatividad. Al acceder al sitio web, declaras ser mayor de edad y estar facultado legalmente para obligarte, aceptando expresamente y sin excepciones que el acceso y uso del sitio web, de sus servicios y contenidos se realiza bajo tu única y exclusiva responsabilidad. Te comprometes a hacer un uso adecuado de los recursos del Sitio Web, conforme a los términos de CREATIVE LIFE, la moral, el orden público, las buenas costumbres y la legalidad vigente, sin perjudicar ni dañar a los titulares del Sitio Web ni a ningún tercero.</p>
              </div>
              
              <h3 className="sub-heading">2.1. Participación del usuario</h3>
              <p>Algunas páginas del Sitio Web pueden permitirte participar mediante comentarios o la generación de contenidos. Queda prohibido difundir contenidos ilícitos, racistas, xenófobos, de apología del terrorismo, atentatorios contra los derechos humanos, o que inciten al odio, vulneren la dignidad de la persona, sean injuriosos o calumniosos o contra el orden o la seguridad pública. Nos reservamos el derecho de retirar los comentarios y/o contenidos que incumplan lo anteriormente expuesto o que, a nuestro juicio, no resulten adecuados para su publicación en el Sitio Web.</p>
              
              <h3 className="sub-heading">2.2. Contratación de servicios</h3>
              <p>La contratación de servicios ofrecidos en el Sitio Web se realizará conforme a las condiciones de contratación puestas a disposición del usuario durante el proceso de contratación y siempre antes de la realización del pedido.</p>
              
              <h2 className="section-heading">3. Registro como cliente</h2>
              <p>Si lo deseas, puedes crear una cuenta de cliente. Con el registro tendrás acceso a funcionalidades adicionales del Sitio Web, como la gestión de pedidos y la personalización de servicios. Los datos que nos proporciones deben ser exactos, completos, veraces y actualizados, y serán procesados y tratados conforme a nuestra política de privacidad, siempre en cumplimiento de la legislación vigente en materia de protección de datos personales.</p>
              <p>El usuario podrá darse de baja en cualquier momento como usuario registrado del Sitio Web.</p>
              
              <h2 className="section-heading">4. Responsabilidad</h2>
              <p>No podemos garantizar que no se produzcan interrupciones o errores en el acceso al Sitio Web, pero tan pronto tengamos conocimiento de cualquier incidencia, procederemos a su subsanación, salvo que se deba a causas ajenas a nuestro control.</p>
              
              <h2 className="section-heading">5. Propiedad Intelectual e Industrial</h2>
              <h3 className="sub-heading">5.1. Contenidos del Sitio Web</h3>
              <p>Todos los contenidos publicados en el Sitio Web son propiedad de CREATIVE LIFE o se dispone de la correspondiente licencia y/o autorización para su utilización. Queda prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos del Sitio Web sin nuestra previa autorización expresa y por escrito.</p>
              
              <h3 className="sub-heading">5.2. Contenidos generados por el usuario</h3>
              <p>Al aceptar los presentes términos de uso, nos concedes una licencia para la publicación de las aportaciones que realices en las herramientas de participación establecidas en el Sitio Web.</p>
              
              <h2 className="section-heading">6. Política de Enlaces</h2>
              <p>Nuestra política de enlaces se rige por las condiciones establecidas en la sección correspondiente de los presentes términos de uso.</p>
              
              <h2 className="section-heading">7. Incumplimiento. Derecho de exclusión</h2>
              <p>Cualquier incumplimiento de los presentes términos de uso podrá ser objeto de la correspondiente reclamación judicial o extrajudicial, así como cualquier utilización no autorizada del Sitio Web, ejercitando las acciones legales oportunas en defensa de nuestros legítimos intereses. Nos reservamos el derecho a denegar o retirar el acceso al Sitio Web a aquellos usuarios que incumplan los presentes términos de uso.</p>
              
              <h2 className="section-heading">8. Modificación de los presentes términos</h2>
              <p>Podremos modificar en cualquier momento los términos aquí determinados, siendo debidamente publicados como aquí aparecen. La vigencia de los citados términos de uso irá en función de su exposición y estarán vigentes hasta que sean modificados por otros debidamente publicados.</p>
              
              <h2 className="section-heading">9. Ley aplicable</h2>
              <p>Los presentes términos de uso se regirán por la legislación española.</p>

              <Button className="btn-custom mt-3">Volver al inicio</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
}

export default AvisoLegal;



