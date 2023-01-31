import React from 'react';

import { useForm } from 'react-hook-form';

export default function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register('Nombre', { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Apellidos"
        {...register('Apellidos', { required: true, maxLength: 100 })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        {...register('Telefono', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <input
        {...register('Developer', { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register('Developer', { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
