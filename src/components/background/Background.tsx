import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) => {
  const { color = 'bg-slate-800', children } = props;
  return <div className={`antialiased ${color}`}>{children}</div>;
};

export { Background };
