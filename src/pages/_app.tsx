import { AppProps } from 'next/app';

import '../styles/global.css';
import AuthContextProvider from '../contexts/AuthContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
);

export default MyApp;
