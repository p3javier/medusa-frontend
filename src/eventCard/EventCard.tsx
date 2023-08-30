import { CardBody } from '../components/cardBody/CardBody';
import { CardFooter } from '../components/cardFooter/CardFooter';
import { ImageContainer } from '../imageContainer/ImageContainer';
import { IEvent } from '../types';

const EventCard = ({ name, description, thumbnail_image, slug }: IEvent) => {
  return (
    <div className="transition ease-out delay-150 border rounded-xl aspect-3/4 backdrop-blur-sm backdrop-brightness-125 hover:backdrop-blur-none hover:scale-105">
      <div className="grid grid-rows-8 h-full mx-2">
        <div className="row-span-3">
          <ImageContainer src={thumbnail_image} />
        </div>
        <div className="row-span-1">
          <div className="text-violet-200 text-2xl font-bold">{name}</div>
        </div>
        <div className="row-span-3">
          <CardBody text={description} />
        </div>
        <div className="row-span-1">
          <CardFooter slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
