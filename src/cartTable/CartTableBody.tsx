/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import { CartServiceCell } from './CartServiceCell';
import { useCartStore } from '../store';
import { EventCart, BaseEvent } from '../types';

export const CartTableBody = ({ eventsList }: { eventsList: BaseEvent[] }) => {
  const [eventsRow, setEventsRow] = useState<JSX.Element[]>([]);
  const cart = useCartStore((state) => state.events);
  useEffect(() => {
    const renderEvents = () =>
      cart.map((cartItem: EventCart) => {
        const cartEvent = eventsList.filter(
          (event) => event._id === cartItem.id
        );
        const event = cartEvent[0];
        const totalPrice = event?.price ? event.price * cartItem.units : 0;
        return (
          <tr
            key={cartItem.id}
            className="border-b bg-gray-800 border-gray-700  hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-3 md:px-6 py-4 font-medium  md:whitespace-nowrap text-white"
            >
              <CartServiceCell title={event?.name} />
            </th>
            <td className="px-6 py-4">{cartItem.units}</td>
            <td className="px-6 py-3">{event?.price}</td>
            <td className="px-6 py-3">{totalPrice}</td>
          </tr>
        );
      });
    setEventsRow(renderEvents());
  }, []);

  return <tbody>{eventsRow}</tbody>;
};
