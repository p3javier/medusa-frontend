import React, { useContext } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../components/button/Button';
import { Checkbox } from '../components/checkbox/Checkbox';
import { TextInput } from '../components/textinput/textinput';
import { FirestoreContext } from '../contexts/FirestoreContextProvider';
import { Section } from '../layout/Section';
import { useCartStore } from '../store';
import { OrderInputs } from '../types';

const RequestOrder = () => {
  const db = useContext(FirestoreContext);

  const clearCart = useCartStore((state) => state.clearEvents);

  const cart = useCartStore((state) => state.events);

  const sendOrder = async (data: OrderInputs) => {
    try {
      await addDoc(collection(db, 'orders'), {
        name: data.Nombre,
        lastName: data.Apellidos,
        email: data.Email,
        phone: data.Telefono,
        terms: true,
        cart,
      });
    } catch (e) {
      throw new Error(`Error adding document: ${e}`);
    }
  };

  const showEmptyCartError = () => {
    alert('No has añadido ningún evento');
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OrderInputs>();
  const onSubmit: SubmitHandler<OrderInputs> = async (data: OrderInputs) => {
    if (cart.length) {
      try {
        await sendOrder(data);
        clearCart();
        window.location.href = '/gracias';
      } catch (error) {
        alert('algo salió mal');
      }
    }
    showEmptyCartError();
  };
  if (errors) {
    // console.error('Error from component', errors);
  }
  return (
    <div className="w-72">
      <form onSubmit={handleSubmit(onSubmit)} className="min-w-max">
        <Section yPadding="py-3">
          <TextInput
            label="Nombre"
            placeholder="Juan"
            {...register('Nombre', { required: true, maxLength: 80 })}
            onNameChange={(e) => setValue('Nombre', e.target.value)}
            required
          />
        </Section>

        <Section yPadding="py-3">
          <TextInput
            label="Apellidos"
            placeholder="González Castro"
            {...register('Apellidos', { required: true, maxLength: 100 })}
            onNameChange={(e) => setValue('Apellidos', e.target.value)}
            required
          />
        </Section>
        <Section yPadding="py-3">
          <TextInput
            label="Email"
            type="email"
            placeholder="correo@example.com"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            onNameChange={(e) => setValue('Email', e.target.value)}
            required
          />
        </Section>
        <Section yPadding="py-3">
          <TextInput
            label="Teléfono"
            type="text"
            placeholder="612345678"
            {...register('Telefono', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            onNameChange={(e) => setValue('Telefono', e.target.value)}
            required
          />
        </Section>
        <Section yPadding="py-3">
          <Checkbox
            label="Términos y Condiciones"
            {...register('Terminos', {
              required: true,
              validate: (value) => value === 'on',
            })}
            onStatusChange={(e) => setValue('Terminos', e.target.value)}
            required
          />
        </Section>
        <Button xl>Realizar pedido</Button>
      </form>
    </div>
  );
};

export default RequestOrder;
