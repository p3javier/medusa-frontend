import Catalog from './Catalog';
import { IEvent } from '../types';

export default function PreviewCatalog({
  events: initialEvents,
}: {
  events: IEvent[];
}) {
  return <Catalog events={initialEvents} />;
}
