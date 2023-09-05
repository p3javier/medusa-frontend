/* eslint-disable import/order */
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from '../header/Header';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import DevBar from '../devBar/DevBar';

type BaseProps = {
  children: ReactNode;
  metaTitle?: string;
  description?: string;
  hideHeader?: boolean;
};
const Base = (props: BaseProps) => {
  const {
    children,
    metaTitle = AppConfig.title,
    description = AppConfig.description,
    hideHeader = false,
  } = props;
  return (
    <div className="antialiased text-gray-400 bg-slate-800 min-h-screen flex flex-col">
      <Meta title={metaTitle} description={description} />
      {process.env.NODE_ENV === 'development' ? <DevBar /> : null}
      {hideHeader || <Header />}
      {children}
      <Footer />
    </div>
  );
};

export { Base };
