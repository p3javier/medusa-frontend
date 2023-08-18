import { Background } from '../components/background/Background';
import EventCard from '../eventCard/EventCard';
import { Base } from '../templates/Base';
import { IEvent } from '../types';

const Catalog = ({ events }: { events: IEvent[] }) => {
  return (
    <Base metaTitle="Catalogo" description="Descripción catalogo">
      <Background color="catalog-background">
        <div className="grid gap-6 m-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </Background>
    </Base>
  );
};

export default Catalog;
