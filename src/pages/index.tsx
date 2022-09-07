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
  apiKey: 'AIzaSyAyuuFLP6Q4DUDu9dqTj_M_5Gq7E2B3VXA',
  authDomain: 'medusa-events.firebaseapp.com',
  projectId: 'medusa-events',
  storageBucket: 'medusa-events.appspot.com',
  messagingSenderId: '828241007040',
  appId: '1:828241007040:web:3686f38d8f96d5dec3b825',
  measurementId: 'G-WX94B79VPH',
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
