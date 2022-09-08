import React from 'react';

import { Typography } from '../components/typography/Typography';
import InfoPage from '../templates/InfoPage';

const TITLE = 'Sobre Nosotros';

const INTRO_TEXT = `Medusa Events se formó en 2021 por dos jovenes cordobeses que
identificaron la carencia que existe en cuanto a servicios online para la
organización de eventos, especialmente los relacionados con las despedidas
de soltero y soltera.`;

const Body = () => (
  <>
    <Typography>{INTRO_TEXT}</Typography>
    <br />
    <Typography>
      En base a ese vacio competitivo decidimos montar una plataforma online que
      conectase a proveedores de servicios con clientes interesados en organizar
      un evento.
    </Typography>
    <br />
    <Typography>
      Actualmente estamos centrados en el nicho de las despedidas pero con
      intención de expandir la plantilla y la oferta de servicios a cualquier
      tipo de eventos.
    </Typography>
  </>
);

const SobreNosotros = () => (
  <InfoPage title={TITLE} description={INTRO_TEXT}>
    <Body />
  </InfoPage>
);

export default SobreNosotros;
