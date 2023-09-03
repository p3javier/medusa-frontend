import { ReactNode } from 'react';

import className from 'classnames';

interface IButtonProps {
  xl?: boolean;
  xs?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <button
      type="submit"
      className={btnClass}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-lg text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
