import { useEffect, useState } from 'react';

import { Typography } from '../components/typography/Typography';
import { useCartStore } from '../store';

export const CartWidgetItemsNumber = ({ xl }: { xl?: boolean }) => {
  const [eventsNumber, setEventsNumber] = useState(0);
  const events = useCartStore((state) => state.events);
  useEffect(() => {
    setEventsNumber(events.length);
  }, [events]);

  return <Typography variant={xl ? 'h4' : 'body'}>{eventsNumber}</Typography>;
};
