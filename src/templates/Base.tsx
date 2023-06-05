/* eslint-disable import/order */
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

type BaseProps = {
  children: ReactNode;
  metaTitle?: string;
  description?: string;
};
const Base = (props: BaseProps) => {
  const {
    children,
    metaTitle = AppConfig.title,
    description = AppConfig.description,
  } = props;
  return (
    <div className="antialiased text-gray-400 bg-slate-800 min-h-screen flex flex-col">
      <Meta title={metaTitle} description={description} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Base };
