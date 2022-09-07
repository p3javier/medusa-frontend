import { ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

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
    <div className="antialiased text-gray-400 bg-slate-800">
      <Meta title={metaTitle} description={description} />
      {children}
      <Footer />
    </div>
  );
};

export { Base };
