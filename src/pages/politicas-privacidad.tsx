import React from 'react';

import { Typography } from '../components/typography/Typography';
import InfoPage from '../templates/InfoPage';

const TITLE = 'Políticas de Privacidad y Cookies';

const INTRO_TEXT = `En esta página podrás consultar nuestras políticas de privacidad
y de uso de cookies.`;

const Body = () => (
  <>
    <Typography align="justify">
      Esta Política de privacidad describe cómo se recopila, utiliza y comparte
      su información personal cuando visita o hace una compra en medusa.events
      (denominado en lo sucesivo el “Sitio”).
    </Typography>
    <br />
    <Typography variant="h5">INFORMACIÓN PERSONAL QUE RECOPILAMOS</Typography>
    <Typography align="justify">
      Cuando visita el Sitio, recopilamos automáticamente cierta información
      sobre su dispositivo, incluida información sobre su navegador web,
      dirección IP, zona horaria y algunas de las cookies que están instaladas
      en su dispositivo. Además, a medida que navega por el Sitio, recopilamos
      información sobre las páginas web individuales o los productos que ve, las
      páginas web o los términos de búsqueda que lo remitieron al Sitio e
      información sobre cómo interactúa usted con el Sitio. Nos referimos a esta
      información recopilada automáticamente como “Información del dispositivo”.
    </Typography>
    <br />
    <Typography align="justify">
      Recopilamos Información del dispositivo mediante el uso de las siguientes
      tecnologías:
    </Typography>
    <br />
    <ul>
      <li>
        <Typography align="justify">
          - Los “Archivos de registro” rastrean las acciones que ocurren en el
          Sitio y recopilan datos, incluyendo su dirección IP, tipo de
          navegador, proveedor de servicio de Internet, páginas de
          referencia/salida y marcas de fecha/horario.
        </Typography>
      </li>
      <br />
      <li>
        <Typography align="justify">
          - Las “balizas web”, las “etiquetas” y los “píxeles” son archivos
          electrónicos utilizados para registrar información sobre cómo navega
          usted por el Sitio.
        </Typography>
      </li>
    </ul>
  </>
);

const SobreNosotros = () => (
  <InfoPage title={TITLE} description={INTRO_TEXT}>
    <Body />
  </InfoPage>
);

export default SobreNosotros;
