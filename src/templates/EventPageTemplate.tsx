import { Base } from './Base';
import AddToCart from '../addToCart/AddToCart';
import { Typography } from '../components/typography/Typography';
import { ImageContainer } from '../imageContainer/ImageContainer';
import { Section } from '../layout/Section';
import { EventRepo } from '../types';

const EventPageTemplate = ({
  _id,
  name,
  description,
  long_description,
  main_image,
}: EventRepo) => {
  return (
    <Base metaTitle={name} description={description}>
      <Section yPadding="py-4">
        <ImageContainer src={main_image} />
      </Section>
      <Section yPadding="py-4">
        <Typography variant="h3">{name}</Typography>
      </Section>
      <Section yPadding="py-4">
        <div className="whitespace-pre-wrap">
          <Typography variant="body">{long_description}</Typography>
        </div>
      </Section>
      <Section>
        <AddToCart eventId={_id} />
      </Section>
    </Base>
  );
};

export default EventPageTemplate;
