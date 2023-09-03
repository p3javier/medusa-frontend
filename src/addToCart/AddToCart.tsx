import React, { useState } from 'react';

import { Button } from '../components/button/Button';
import { NumberInput } from '../components/numberInput/NumberInput';
import { useCartStore } from '../store';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const AddToCart = ({ eventId }: { eventId: string }) => {
  const [numberValue, setNumberValue] = useState(1);

  const handleNumberChange = (event: HTMLElementEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value: number = Number(event.target.value);
    setNumberValue(value);
  };
  const addEvent = useCartStore((state) => state.addEvent);

  const handleClick = () => {
    addEvent({ id: eventId, units: numberValue });
  };
  return (
    <div>
      <NumberInput
        label="Número de asistentes"
        value={numberValue}
        onChange={handleNumberChange}
        min={1}
      />
      <Button onClick={handleClick} xl>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default AddToCart;
