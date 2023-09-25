import { AppProps } from 'next/app';

import '../styles/global.css';
import AuthContextProvider from '../contexts/AuthContext';
import FirestoreContextProvider from '../contexts/FirestoreContextProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
    <FirestoreContextProvider>
      <Component {...pageProps} />
    </FirestoreContextProvider>
  </AuthContextProvider>
);

export default MyApp;
