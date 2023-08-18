import { useMemo } from 'react';

import { LiveQueryProvider } from 'next-sanity/preview';

import { getClient } from '../../sanity/client';

export default function PreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => getClient(true), []);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
