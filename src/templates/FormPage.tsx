/* eslint-disable import/order */
import React, { ReactNode } from 'react';

import { Base } from './Base';
import { Background } from '../components/background/Background';

type FormPageProps = {
  children: ReactNode;
  title: string;
  description: string;
};
const FormPage = (props: FormPageProps) => (
  <Base metaTitle={props.title} description={props.description}>
    <Background color="bg-violet-900">{props.children}</Background>
  </Base>
);

export default FormPage;
