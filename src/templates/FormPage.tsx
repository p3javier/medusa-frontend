import React, { ReactNode } from 'react';

import { Background } from '../components/background/Background';
import { Base } from './Base';

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
