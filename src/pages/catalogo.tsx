import Catalog from '../catalog/Catalog';
import PreviewCatalog from '../catalog/PreviewCatalog';
import PreviewProvider from '../components/previewProvider/PreviewProvider';
import { getClient } from '../sanity/client';
import { eventsQuery } from '../sanity/queries';
import { IEvent } from '../types';

export const getStaticProps = async () => {
  const preview = process.env.NODE_ENV === 'development';
  const client = getClient(preview);

  try {
    const allEvents = await client.fetch(eventsQuery);
    return { props: { preview, allEvents } };
  } catch (error) {
    console.log(error); // cambiar esto
    throw error;
  }
};

export default function CatalogPage({
  preview,
  allEvents,
}: {
  preview: boolean;
  allEvents: IEvent[];
}) {
  if (preview) {
    return (
      <PreviewProvider>
        <PreviewCatalog events={allEvents} />
      </PreviewProvider>
    );
  }
  if (allEvents.length) {
    return <Catalog events={allEvents} />;
  }
  return <div>Loading...</div>;
}
