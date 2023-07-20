import React, { useContext, useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../components/button/Button';
import { LoginError } from '../components/loginError/LoginError';
import { TextInput } from '../components/textinput/textinput';
import { AuthContext } from '../contexts/AuthContext';
import { Section } from '../layout/Section';
import FormPage from '../templates/FormPage';
import { ErrorMessages } from '../utils/errorMessages';

type LoginInputs = {
  Email: string;
  keepMeLoggedIn: boolean;
  password: string;
};

export default function Login() {
  const auth = useContext(AuthContext);
  const [isLoginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showLoginError = (error: any) => {
    setLoginError(true);
    const errorMessageFromMap = ErrorMessages[error.code];
    if (errorMessageFromMap) {
      setErrorMessage(errorMessageFromMap);
    }
  };

  const loginEmailPassword = async (data: LoginInputs) => {
    const { Email, password } = data;
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        Email,
        password
      );
      console.log(userCredentials);
      const { emailVerified } = userCredentials.user;

      if (emailVerified) {
        window.location.replace('/');
      }
    } catch (error) {
      if (error && typeof error === 'object') {
        showLoginError(error);

        console.error(JSON.stringify(error));
      }
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) =>
    loginEmailPassword(data);
  if (errors) {
    // console.error('Error from component', errors);
  }

  return (
    <FormPage title="Login" description="Página de Login">
      <Section yPadding="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              label="password"
              type="password"
              {...register('password', { required: true, maxLength: 80 })}
              onNameChange={(e) => setValue('password', e.target.value)}
            />
          </Section>

          <LoginError show={isLoginError} code={errorMessage} />

          <Button xl>Acceder</Button>
        </form>
      </Section>
    </FormPage>
  );
}
