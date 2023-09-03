import React, { useState } from 'react';

import { Button } from '../components/button/Button';
import { NumberInput } from '../components/numberInput/NumberInput';
import { useCartStore } from '../store';

const AddToCart = ({ eventId }: { eventId: string }) => {
  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (event: any) => {
    setNumberValue(event.target.value);
  };
  const addEvent = useCartStore((state) => state.addEvent);
  return (
    <div>
      <NumberInput
        label="Número de asistentes"
        value={numberValue}
        onChange={handleNumberChange}
      />
      <Button onClick={() => addEvent({ id: eventId, units: 1 })} xl>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default AddToCart;
