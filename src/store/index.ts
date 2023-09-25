/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { EventCart } from '../types';

type State = {
  events: EventCart[];
};

type Action = {
  addEvent: (event: EventCart) => void;
  clearEvents: () => void;
};

const haveSameId = (element: EventCart, event: EventCart) =>
  element.id === event.id;

const incrementFn = (event: EventCart, state: State) => {
  if (state.events.length) {
    const newEventsArray = state.events.map((element) => {
      if (haveSameId(element, event)) {
        return {
          id: element.id,
          units: element.units + (event.units || 1),
        };
      }
      return element;
    });
    return {
      events: newEventsArray,
    };
  }
  return { events: [...state.events, event] };
};

export const useCartStore = create(
  persist<State & Action>(
    (set) => ({
      events: [],
      addEvent: (event) => set((state) => incrementFn(event, state)),
      clearEvents: () => set(() => ({ events: [] })),
    }),
    {
      name: 'events-storage',
    }
  )
);
