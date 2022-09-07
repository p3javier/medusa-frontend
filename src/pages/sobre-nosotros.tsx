import React from 'react';

import { Background } from '../components/background/Background';
import { Typography } from '../components/typography/Typography';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Base } from '../templates/Base';
import { Logo } from '../templates/Logo';

const TITLE = 'Sobre Nosotros';

const INTRO_TEXT = `Medusa Events se formó en 2021 por dos jovenes cordobeses que
identificaron la carencia que existe en cuanto a servicios online para la
organización de eventos, especialmente los relacionados con las despedidas
de soltero y soltera.`;

const Body = () => (
  <>
    <Typography>{INTRO_TEXT}</Typography>
    <Typography>
      En base a ese vacio competitivo decidimos montar una plataforma online que
      conectase a proveedores de servicios con clientes interesados en organizar
      un evento.
    </Typography>
    <Typography>
      Actualmente estamos centrados en el nicho de las despedidas pero con
      intención de expandir la plantilla y la oferta de servicios a cualquier
      tipo de eventos.
    </Typography>
  </>
);
const SobreNosotros = () => (
  <Base metaTitle={TITLE} description={INTRO_TEXT}>
    <Background color="bg-violet-900">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />} />
      </Section>
    </Background>
    <Section title={TITLE}>
      <Body />
    </Section>
  </Base>
);

export default SobreNosotros;
