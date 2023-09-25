/* eslint-disable import/order */
import React, { ReactNode } from 'react';

import { Base } from './Base';
import { Section } from '../layout/Section';

type InfoPageProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const InfoPage = (props: InfoPageProps) => (
  <Base metaTitle={props.title} description={props.description}>
    <Section title={props.title}>{props.children}</Section>
  </Base>
);

export default InfoPage;
