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
  Telefono: number;
  Terminos: boolean;
};

export default function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);
  console.error('Error from component', errors);

  return (
    <FormPage title="Registro" description="Página de registro">
      <Section yPadding="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section yPadding="py-4">
            <TextInput
              label="Nombre"
              placeholder="Juan"
              {...register('Nombre', { required: true, maxLength: 80 })}
            />
          </Section>

          <Section yPadding="py-4">
            <TextInput
              label="Apellidos"
              placeholder="González Castro"
              {...register('Apellidos', { required: true, maxLength: 100 })}
            />
          </Section>
          <Section yPadding="py-4">
            <TextInput
              label="Email"
              type="email"
              placeholder="correo@example.com"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Section>
          <Section yPadding="py-4">
            <TextInput
              label="Teléfono"
              type="tel"
              placeholder="612345678"
              {...register('Telefono', {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </Section>

          <Button xl>Enviar</Button>
        </form>
      </Section>
    </FormPage>
  );
}
