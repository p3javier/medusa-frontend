import React, { useContext } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../components/button/Button';
import { Checkbox } from '../components/checkbox/Checkbox';
import { TextInput } from '../components/textinput/textinput';
import { FirestoreContext } from '../contexts/FirestoreContextProvider';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';
import { ContactInputs } from '../types';

export default function Contacto() {
  const db = useContext(FirestoreContext);
  const sendContactForm = async (data: ContactInputs) => {
    try {
      await addDoc(collection(db, 'orders'), {
        name: data.Nombre,
        lastName: data.Apellidos,
        email: data.Email,
        phone: data.Telefono,
        terms: data.Terminos === 'on',
        message: data.Consulta,
      });
    } catch (e) {
      throw new Error(`Error adding document: ${e}`);
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = async (data: ContactInputs) =>
    sendContactForm(data);
  if (errors) {
    // console.error('Error from component', errors);
    // alert('Faltan campos');
  }
  return (
    <Base>
      <Section title="Formulario de Contacto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section yPadding="py-3">
            <TextInput
              label="Nombre"
              placeholder="Juan"
              {...register('Nombre', { required: true, maxLength: 80 })}
              onNameChange={(e) => setValue('Nombre', e.target.value)}
            />
          </Section>

          <Section yPadding="py-3">
            <TextInput
              label="Apellidos"
              placeholder="González Castro"
              {...register('Apellidos', { required: true, maxLength: 100 })}
              onNameChange={(e) => setValue('Apellidos', e.target.value)}
            />
          </Section>
          <Section yPadding="py-3">
            <TextInput
              label="Email"
              type="email"
              placeholder="correo@example.com"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
              onNameChange={(e) => setValue('Email', e.target.value)}
            />
          </Section>
          <Section yPadding="py-3">
            <textarea
              className="min-w-full text-black font-semibold antialiased indent-3 rounded-lg placeholder:text-slate-400 placeholder:font-bold"
              placeholder="Escriba su consulta..."
              {...register('Consulta', { required: true, maxLength: 1000 })}
            ></textarea>
          </Section>
          <Section yPadding="py-3">
            <Checkbox
              label="Términos y Condiciones"
              {...register('Terminos', {
                required: true,
                validate: (value) => value === 'on',
              })}
              onStatusChange={(e) => setValue('Terminos', e.target.value)}
            />
          </Section>
          <Button xl>Enviar consulta</Button>
        </form>
      </Section>
    </Base>
  );
}
