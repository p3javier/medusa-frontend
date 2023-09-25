import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from 'firebase/app-check';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

// Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
// site key and pass it to initializeAppCheck().
if (!process.env.NEXT_PUBLIC_RECAPTCHA) {
  throw new TypeError('process.env.NEXT_PUBLIC_RECAPTCHA must be defined');
}
// eslint-disable-next-line import/no-mutable-exports
let appCheck;
if (typeof document !== 'undefined') {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(
      process.env.NEXT_PUBLIC_RECAPTCHA
    ),
    isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
  });
}

export { app, appCheck };
