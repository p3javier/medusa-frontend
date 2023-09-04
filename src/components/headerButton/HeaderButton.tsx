import Link from 'next/link';

import { Typography } from '../typography/Typography';

type HeaderButtonProps = {
  title: string;
  href: string;
};
export const HeaderButton = ({ title, href }: HeaderButtonProps) => (
  <Link href={href}>
    <div className="cursor-pointer whitespace-nowrap rounded-lg hover:backdrop-brightness-200 py-4 px-2 transition duration-150">
      <Typography variant="h4">{title}</Typography>
    </div>
  </Link>
);
