import { useEffect } from 'react';

import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
// Import the functions you need from the SDKs you need

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

let analytics: Analytics;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

const Index = () => {
  useEffect(() => {
    logEvent(analytics, 'landing_page_loaded');
  });
  return (
    <Base>
      <Hero />
      <VerticalFeatures />
      <Banner />
    </Base>
  );
};

export default Index;
