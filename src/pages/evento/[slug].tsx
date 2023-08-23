import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';

import { getClient } from '../../sanity/client';
import { eventSlugsQuery, eventBySlugQuery } from '../../sanity/queries';
import EventPageTemplate from '../../templates/EventPageTemplate';
import { EventRepo } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const preview = process.env.NODE_ENV === 'development';
  const paths = await getClient(preview).fetch(eventSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ event: EventRepo }> = async ({
  params,
}) => {
  const preview = process.env.NODE_ENV === 'development';
  const event = await getClient(preview).fetch(eventBySlugQuery, {
    slug: params?.slug,
  });
  return { props: { event } };
};

export default function EventPage({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <EventPageTemplate {...event} />;
}
