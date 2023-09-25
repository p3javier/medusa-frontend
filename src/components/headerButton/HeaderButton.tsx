import Link from 'next/link';

import { Typography } from '../typography/Typography';

type HeaderButtonProps = {
  title: string;
  href: string;
  isMobile?: boolean;
};
export const HeaderButton = ({ title, href, isMobile }: HeaderButtonProps) => (
  <Link href={href}>
    <div className="cursor-pointer whitespace-nowrap rounded-lg hover:backdrop-brightness-200 py-4 px-2 transition duration-150">
      <Typography variant={isMobile ? 'body' : 'h4'}>{title}</Typography>
    </div>
  </Link>
);
