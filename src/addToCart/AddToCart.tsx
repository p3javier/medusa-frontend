import React, { useState } from 'react';

import { Button } from '../components/button/Button';
import { NumberInput } from '../components/numberInput/NumberInput';

const AddToCart = () => {
  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (event: any) => {
    setNumberValue(event.target.value);
  };
  return (
    <div>
      <NumberInput
        label="Número de asistentes"
        value={numberValue}
        onChange={handleNumberChange}
      />
      <Button xl>Añadir al carrito</Button>
    </div>
  );
};

export default AddToCart;
