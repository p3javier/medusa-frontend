import { ReactNode } from 'react';

type TextAlign = 'start' | 'end' | 'justify' | 'right' | 'center' | 'left';

type BackgroundProps = {
  variant?:
    | 'body'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle';
  children: ReactNode;
  color?: string;
  align?: TextAlign;
};

type TextSize =
  | '6xl'
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'base'
  | 'sm'
  | 'xs';

const createClass = (textSize: TextSize, color: string, textAlign: TextAlign) =>
  `text-${textSize} text-${color} text-${textAlign}`;

export const Typography: (props: BackgroundProps) => JSX.Element = (props) => {
  const {
    children,
    variant = 'body',
    color = 'gray-400',
    align = 'start',
  } = props;

  switch (variant) {
    case 'body':
      return <p className={createClass('xl', color, align)}>{children}</p>;
    case 'h1':
      return <h1 className={createClass('6xl', color, align)}>{children}</h1>;
    case 'h2':
      return <h2 className={createClass('5xl', color, align)}>{children}</h2>;
    case 'h3':
      return <h3 className={createClass('5xl', color, align)}>{children}</h3>;
    case 'h4':
      return <h4 className={createClass('4xl', color, align)}>{children}</h4>;
    case 'h5':
      return <h5 className={createClass('3xl', color, align)}>{children}</h5>;
    case 'h6':
      return <h6 className={createClass('2xl', color, align)}>{children}</h6>;
    default:
      throw new Error(
        "Something is worng, variant should default to 'body' always"
      );
  }
};
export default Typography;
