import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../components/button/Button';
import { TextInput } from '../components/textinput/textinput';
import { Section } from '../layout/Section';
import FormPage from '../templates/FormPage';

type Inputs = {
  Nombre: string;
  Apellidos: string;
  Email: string;
  Telefono: string;
  Terminos: boolean;
};

export default function Registro() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => data;
  if (errors) {
    // console.error('Error from component', errors);
  }

  return (
    <FormPage title="Registro" description="Página de registro">
      <Section yPadding="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section yPadding="py-4">
            <TextInput
              label="Nombre"
              placeholder="Juan"
              {...register('Nombre', { required: true, maxLength: 80 })}
              onNameChange={(e) => setValue('Nombre', e.target.value)}
            />
          </Section>

          <Section yPadding="py-4">
            <TextInput
              label="Apellidos"
              placeholder="González Castro"
              {...register('Apellidos', { required: true, maxLength: 100 })}
              onNameChange={(e) => setValue('Apellidos', e.target.value)}
            />
          </Section>
          <Section yPadding="py-4">
            <TextInput
              label="Email"
              type="email"
              placeholder="correo@example.com"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
              onNameChange={(e) => setValue('Email', e.target.value)}
            />
          </Section>
          <Section yPadding="py-4">
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
            />
          </Section>
          <button type="submit">test</button>
          <Button xl>Enviar</Button>
        </form>
      </Section>
    </FormPage>
  );
}
