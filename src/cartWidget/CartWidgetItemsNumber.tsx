import { Typography } from '../components/typography/Typography';
import { useEventsNumber } from '../utils/getEventsNumber';

export const CartWidgetItemsNumber = () => {
  const eventsNumber = useEventsNumber();
  return <Typography variant="h4">{eventsNumber}</Typography>;
};
