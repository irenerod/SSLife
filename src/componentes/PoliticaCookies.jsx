import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

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
  .yellow {
    color: yellow;
  }
`;

const PoliticaDeCookies = () => {
  return (
    <StyledContainer className="mt-5">
      <Row>
        <Col>
          <h1>Política de Cookies</h1>
          <h2>1. Responsable del tratamiento de datos personales:</h2>
          <p>La responsable del tratamiento de los datos recabados a través del Sitio Web <a href="https://www.sslife.com/">https://www.sslife.com/</a> es CREATIVE LIFE, S.L.N.E. (en adelante CREATIVE LIFE).</p>
          <p><strong>TITULARIDAD</strong></p>
          <p><strong>Nombre del titular/responsable:</strong> CREATIVE LIFE, S.L.N.E. (en lo sucesivo, “CREATIVE LIFE”).</p>
          <p><strong>Domicilio:</strong> Calle Jardines, 23. Distrito Centro. Elda. Vinalopó Mitjà, Alicante – España</p>
          <p><strong>Email:</strong> <a href="mailto:contacto@sslife.com">contacto@sslife.com</a></p>
          <p><strong>Teléfono:</strong> ‎+34 966954823 y +34 966957677</p>
          <p><strong>CIF:</strong> B-53489332</p>
          <p><strong>DATOS INSCRIPCIÓN REGISTRO MERCANTIL:</strong> Inscrita en el Registro Mercantil de Alicante al tomo 2307, libro 0, inscripción de la Sección 8ª Folio 89 Hoja A57452 Inscripción 1</p>
          <p>Puedes contactar de forma directa y efectiva con CREATIVE LIFE en relación con la presente política de privacidad en la dirección de correo electrónico <a href="mailto:contacto@sslife.com">contacto@sslife.com</a>.</p>

          <h2>2. ¿Qué son las cookies?</h2>
          <p>Una cookie es un dispositivo o pequeño archivo que el servidor de este Sitio Web envía al navegador del terminal (ordenador, smartphone, tablet, etc.) desde el que te conectas, con la finalidad de almacenar información sobre la navegación que efectúas desde dicho terminal, que podrá, en su caso, ser recuperada con posterioridad.</p>

          <h3>2.1. ¿QUÉ TIPOS DE COOKIES EXISTEN?</h3>
          <p>Existen diferentes categorías de cookies, pero una misma cookie puede estar incluida en más de una categoría:</p>

          <h3>2.1.1. TIPOS DE COOKIES SEGÚN LA ENTIDAD QUE LAS GESTIONE</h3>
          <p>Según quien sea la entidad que gestione el equipo o dominio desde donde se envían las cookies y trate los datos que se obtengan, podemos distinguir:</p>
          <ul>
            <li><strong>Cookies propias:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el titular/editor del Sitio Web y desde el que se presta el servicio solicitado por el usuario.</li>
            <li><strong>Cookies de terceros:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el titular/editor del Sitio Web, sino por otra entidad que trata la información obtenida a través de las cookies. En caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio titular/editor del Sitio Web, pero la información que se recoja mediante éstas sea gestionada por un tercero, tendrán asimismo la consideración de cookies de terceros.</li>
          </ul>

          <h3>2.1.2. TIPOS DE COOKIE SEGÚN EL PLAZO DE TIEMPO QUE PERMANECEN ACTIVADAS</h3>
          <ul>
            <li><strong>Cookies de sesión:</strong> Son un tipo de cookies diseñadas para recabar y almacenar información mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</li>
            <li><strong>Cookies persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
          </ul>

          <h3>2.1.3. TIPOS DE COOKIE SEGÚN SU FINALIDAD</h3>
          <p>Según la finalidad para la que se traten los datos obtenidos a través de las cookies, podemos distinguir entre:</p>
          <ul>
            <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
            <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</li>
            <li><strong>Cookies de análisis:</strong> Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.</li>
            <li><strong>Cookies publicitarias:</strong> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
            <li><strong>Cookies de publicidad comportamental:</strong> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
          </ul>

          <h2>3. ¿Qué cookies se utilizan en el sitio web?</h2>
          <h3>Cookies técnicas y funcionales:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Cookie</th>
                <th>Finalidad</th>
                <th>Permanencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sslife.com</td>
                <td>_gat_UA-XXXXXX-X</td>
                <td>Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>sslife.com</td>
                <td>_hjAbsoluteSessionInProgress</td>
                <td>Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>google.com</td>
                <td>CONSENT</td>
                <td>Rastreador de consentimiento de cookies de Google</td>
                <td>17 años</td>
              </tr>
              <tr>
                <td>google.com</td>
                <td>SEARCH_SAMESITE</td>
                <td>SameSite evita que el navegador envíe esta cookie junto con las solicitudes entre sitios.</td>
                <td>6 meses</td>
              </tr>
              <tr>
                <td>youtube.com</td>
                <td>CONSENT</td>
                <td>Rastreador de consentimiento de cookies de Google</td>
                <td>17 años</td>
              </tr>
            </tbody>
          </table>

          <h3>Cookies Analíticas:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Cookie</th>
                <th>Finalidad</th>
                <th>Permanencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>youtube.com</td>
                <td>__Secure-3PAPISID</td>
                <td>Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses.</td>
                <td>2 años</td>
              </tr>
              <tr>
                <td>youtube.com</td>
                <td>__Secure-3PSID</td>
                <td>Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses.</td>
                <td>2 años</td>
              </tr>
              <tr>
                <td>youtube.com</td>
                <td>__Secure-3PSIDCC</td>
                <td>Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses.</td>
                <td>1 año</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Información sobre la forma de aceptar, denegar o revocar el consentimiento para el uso de cookies:</h2>
          <p>CREATIVE LIFE muestra información sobre su Política de cookies en la parte inferior de cualquier página del sitio web con cada inicio de sesión. Ante esta información, es posible realizar las siguientes acciones:</p>
          <ul>
            <li><strong>Aceptar cookies:</strong> Se instalarán en su equipo todas las cookies señaladas en el apartado “Cookies utilizadas en nuestro sitio web”.</li>
            <li><strong>Rechazar cookies:</strong> No se instalarán en su equipo ninguna de las cookies señaladas en el apartado “Cookies utilizadas en nuestro sitio web” salvo aquellas que se encuentren exceptuadas de acuerdo con lo establecido en la normativa vigente.</li>
            <li><strong>Modificar su configuración:</strong> Podrá obtener más información sobre qué son las cookies, conocer la Política de Cookies de CREATIVE LIFE y modificar la configuración de su navegador para restringir o bloquear las cookies de CREATIVE LIFE en cualquier momento. En el caso de restringir o bloquear las cookies, puede ver reducidas las funcionalidades del Sitio Web.</li>
          </ul>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default PoliticaDeCookies;

