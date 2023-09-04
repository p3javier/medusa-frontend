import { useCartStore } from '../store';

export const useEventsNumber = () => {
  const events = useCartStore((state) => state.events);
  return events.length;
};
