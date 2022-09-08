import React, { ReactNode } from 'react';

import { Background } from '../components/background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Base } from './Base';
import { Logo } from './Logo';

type InfoPageProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const InfoPage = (props: InfoPageProps) => (
  <Base metaTitle={props.title} description={props.description}>
    <Background color="bg-violet-900">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />} />
      </Section>
    </Background>
    <Section title={props.title}>{props.children}</Section>
  </Base>
);

export default InfoPage;
