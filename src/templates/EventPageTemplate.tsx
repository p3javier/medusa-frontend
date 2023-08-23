import { Base } from './Base';
import { EventRepo } from '../types';

const EventPageTemplate = ({
  name,
  description,
  long_description,
}: EventRepo) => {
  return (
    <Base metaTitle={name} description={description}>
      {long_description}
    </Base>
  );
};

export default EventPageTemplate;
