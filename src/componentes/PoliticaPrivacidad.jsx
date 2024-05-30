import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Estilos personalizados para los encabezados
const StyledContainer = styled(Container)`
  h1 {
    color: green;
  }
  h2 {
    color: red;
  }
  h3 {
    color: blue;
  }
`;

const PoliticaDePrivacidad = () => {
  return (
    <StyledContainer className="mt-5 pt-5">
      <Row>
        <Col>
          <h1>Política de Privacidad</h1>
          <h2>1. Responsable del tratamiento de datos personales:</h2>
          <p>La responsable del tratamiento de los datos recabados a través del Sitio Web <a href="https://www.sslife.com/">https://www.sslife.com/</a> (en adelante “el sitio web”) del que CREATIVE LIFE, Empresa de Diseño Web, S.L.N.E. (en adelante CREATIVE LIFE) es titular.</p>
          <p><strong>TITULARIDAD</strong></p>
          <p><strong>Nombre del titular/responsable:</strong> CREATIVE LIFE, Empresa de Diseño Web, S.L.N.E. (en lo sucesivo, “CREATIVE LIFE”).</p>
          <p><strong>Domicilio:</strong> Calle Jardines, 23. Distrito Centro. Elda. Vinalopó Mitjà, Alicante.</p>
          <p><strong>Email:</strong> <a href="mailto:info@creativelife.com">info@creativelife.com</a> o <a href="mailto:info@sslife.com">info@sslife.com</a></p>
          <p><strong>Teléfonos:</strong> 966954823 y 966957677</p>
          <p><strong>CIF:</strong> B12345678</p>
          <p><strong>DATOS INSCRIPCIÓN REGISTRO MERCANTIL:</strong> Inscrita en el Registro Mercantil de Alicante al tomo 3102, libro 0, folio 72, sección 8ª, hoja A123456, inscripción 1.</p>
          <p>Puedes contactar de forma directa y efectiva con CREATIVE LIFE en relación con la presente política de privacidad en la dirección de correo electrónico <a href="mailto:info@creativelife.com">info@creativelife.com</a> o <a href="mailto:info@sslife.com">info@sslife.com</a>.</p>

          <h2>2. Categoría de los datos recabados</h2>
          <p>Los datos personales recabados a través de los diferentes formularios del sitio web son datos identificativos que en ningún caso tienen la consideración de categorías especiales de datos. Los campos de los diferentes formularios del Sitio Web establecidos como de cumplimentación obligatoria serán imprescindibles para poder atender tu solicitud.</p>

          <h3>2.1. Datos recabados en caso de registro en SSLIFE:</h3>
          <p>Para registrarte en la aplicación SSLIFE es preceptivo completar el formulario de registro para crear una cuenta de usuario y así poder acceder al panel de control “MI CUENTA” en el que podrás modificar tus datos personales y realizar un seguimiento de tu uso de la aplicación. En el formulario de registro se solicita tu nombre, apellidos, correo electrónico, teléfono, fecha de nacimiento y una contraseña de tu elección para acceder a MI CUENTA. La contraseña de acceso a tu cuenta de usuario solo la conocerás tú y, en caso de que la olvides, podrás restablecerla haciendo constar la dirección de correo electrónico que facilitaste en el momento del registro.</p>

          <h3>2.2. Datos recabados en el formulario newsletter:</h3>
          <p>Si quieres recibir comunicaciones por vía electrónica sobre los servicios de SSLIFE, novedades y/o eventos, recabamos tu correo electrónico y, si lo deseas, puedes proporcionarnos tu nombre, apellidos, número de teléfono y tu fecha de cumpleaños.</p>

          <h3>2.3. Responsabilidad al proporcionar datos personales:</h3>
          <p>Al proporcionarnos datos personales declaras de forma expresa que te encuentras legitimado/a para hacerlo y te obligas a proporcionar información veraz, exacta y completa, siendo, en caso contrario, la única responsable del incumplimiento de dicha acción. Será asimismo de tu exclusiva responsabilidad mantener actualizada la información proporcionada, cosa que podrás hacer a través del menú “MI CUENTA”. Los campos de los formularios marcados con un asterisco son de cumplimentación obligatoria, siendo necesarios para atender tu solicitud.</p>

          <h2>3. Finalidad y legitimación (base jurídica) para el tratamiento de los datos personales.</h2>
          <p>CREATIVE LIFE tratará los datos personales recabados, con las siguientes finalidades y legitimación (base jurídica para el tratamiento de tus datos):</p>

          <h3>3.1. En caso de registro en SSLIFE:</h3>
          <p>En caso de registro en la aplicación, tus datos serán tratados:</p>
          <ul>
            <li>Para mantener la relación, así como la gestión, administración, información, prestación y mejora del servicio, sobre la base jurídica de la ejecución de un contrato en el que eres parte como interesado.</li>
            <li>Para el envío de comunicaciones comerciales sobre la base del interés legítimo por mercadotecnia directa, salvo que te opongas a ello en cualquier momento.</li>
          </ul>

          <h3>3.2. Segmentación con fines comerciales:</h3>
          <p>La segmentación es una práctica consistente en establecer perfiles de usuarios para la remisión de la información solicitada de forma más personalizada y acorde a los intereses indicados por esos usuarios. De igual forma, en caso de que hayas consentido el envío de comunicaciones comerciales, dicha segmentación permitirá que las mismas sean acordes a los intereses mostrados por ti durante tu uso de la aplicación. En ningún caso, la elaboración de esos perfiles supondrá la adopción de decisiones individuales automatizadas que produzcan efectos jurídicos sobre el interesado o le afecten significativamente de modo similar. La base jurídica de dicho tratamiento se encuentra en el interés legítimo de CREATIVE LIFE para mercadotecnia directa. Te recordamos que estás facultado a oponerte a dicho tratamiento de segmentación para fines comerciales en cualquier momento.</p>

          <h3>3.3. Remitir comunicaciones comerciales:</h3>
          <p>Si no has registrado una cuenta en SSLIFE, y siempre y cuando contemos con tu consentimiento informado, libre, específico e inequívoco, trataremos tus datos con el fin de remitirte comunicaciones comerciales o contactar contigo por teléfono para ofrecerte nuestros servicios, siendo ese consentimiento la base jurídica legitimadora del tratamiento. En cualquier caso, dispones de la facultad de retirar el consentimiento prestado y/u oponerte al envío de comunicaciones en cualquier momento.</p>

          <h3>3.4. En caso de utilizar cualquier formulario de contacto o remitir un correo electrónico:</h3>
          <p>Para proporcionarte la información que nos solicites, sobre la base jurídica del interés legítimo de CREATIVE LIFE de atender tu solicitud de información.</p>

          <h2>4. ¿Por cuánto tiempo se conservan los datos personales recabados?</h2>
          <p>Los datos personales proporcionados se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y durante el plazo por el cual pudieran derivarse responsabilidades por los servicios prestados al interesado. Cuando ya no sea necesario para tales fines, se suprimirán con medidas de seguridad adecuadas para garantizar la pseudonimización de los datos o la destrucción total de los mismos.</p>

          <h2>5. Destinatarios</h2>
          <p>Los datos no se comunicarán a ningún tercero ajeno a CREATIVE LIFE, salvo obligación legal o que nos prestes tu consentimiento informado, libre, específico e inequívoco a tal fin. Como encargados de tratamiento que pueden tener acceso a los datos personales del interesado, siguiendo instrucciones de CREATIVE LIFE, este tiene contratados los servicios de empresas, con las que además tiene suscrito un contrato de encargado de tratamiento conforme a lo establecido en la normativa aplicable en materia de protección de datos.</p>

          <h2>6. Derechos</h2>
          <p>Como interesado que nos has proporcionado tus datos personales, estás facultado para ejercitar los siguientes derechos que la normativa en materia de protección de datos te reconoce de forma expresa, conforme a lo previsto en la misma:</p>
          <ul>
            <li>Derecho de ACCESO a tus datos personales.</li>
            <li>Derecho de solicitar la RECTIFICACIÓN de los datos inexactos.</li>
            <li>Derecho de solicitar la SUPRESIÓN de tus datos, cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
            <li>En determinadas circunstancias, podrás solicitar la LIMITACIÓN DEL TRATAMIENTO de tus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
            <li>En determinadas circunstancias y por motivos relacionados con tu situación particular, podrás ejercitar tu derecho de OPOSICIÓN al tratamiento de tus datos. Dejaremos de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</li>
            <li>En determinadas circunstancias y por motivos relacionados con tu situación particular, podrás solicitar tu derecho a la PORTABILIDAD de los datos. Se trata de un derecho complementario al derecho de acceso, ya que permite obtener los datos que nos has proporcionado en un formato estructurado, de uso común y de lectura mecánica, pudiendo ser transmitidos de forma directa a otra entidad previa petición del interesado.</li>
          </ul>
          <p>Podrás ejercer tales derechos, además de a través de las soluciones técnicas expuestas, solicitando por cualquier medio que deje constancia de su envío y de su recepción, expresando claramente tu voluntad en tal sentido y, en su caso, acompañando copia del DNI y/o cualquier otra documentación acreditativa de tu identidad, dirigiéndote a la dirección de correo electrónico antes indicada, o a la dirección postal anteriormente indicada.</p>
          <p>Además, en caso de que consideres que se ha vulnerado cualquiera de tus derechos, como interesado, estás facultado para presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), sita en C/ Jorge Juan, 6, 28001-Madrid <a href="https://www.aepd.es/">https://www.aepd.es/</a> o a través de la sede electrónica de la AEPD: <a href="https://sedeagpd.gob.es/sede-electronica-web/">https://sedeagpd.gob.es/sede-electronica-web/</a>.</p>

          <h2>7. Seguridad y actualización de tus datos personales</h2>
          <p>Con el objetivo de salvaguardar la seguridad de tus datos personales, te informamos que se han adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados. Todo ello para evitar su alteración, pérdida, y/o tratamientos o accesos no autorizados, tal como exige la normativa, si bien la seguridad absoluta no existe. Es importante que, para que podamos mantener tus datos personales actualizados, nos informes siempre que se produzca una modificación de estos. En caso de que no nos facilites tus datos o lo hagas de forma errónea o incompleta, no podremos atender tu solicitud, resultando del todo imposible proporcionarte la información solicitada o llevar a cabo la contratación y/o prestación de los servicios.</p>

          <h2 className="yellow">8. Confidencialidad</h2>
          <p>Te informamos asimismo de que tus datos serán tratados con el máximo celo y confidencialidad por todo el personal que intervenga en cualquiera de las fases del tratamiento.</p>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default PoliticaDePrivacidad;
