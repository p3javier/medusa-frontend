import React, { useContext } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../components/button/Button';
import { TextInput } from '../components/textinput/textinput';
import { AuthContext } from '../contexts/AuthContext';
import { Section } from '../layout/Section';
import FormPage from '../templates/FormPage';

type Inputs = {
  Nombre: string;
  Apellidos: string;
  Email: string;
  Telefono: string;
  Terminos: boolean;
  password: string;
};

export default function Registro() {
  const auth = useContext(AuthContext);
  const createAccount = async (data: Inputs) => {
    const email = data.Email;
    const { password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('user credentials', userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => createAccount(data);
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
          <Section yPadding="py-4">
            <TextInput
              label="password"
              type="password"
              {...register('password', { required: true, maxLength: 80 })}
              onNameChange={(e) => setValue('password', e.target.value)}
            />
          </Section>
          <Button xl>Enviar</Button>
        </form>
      </Section>
    </FormPage>
  );
}
