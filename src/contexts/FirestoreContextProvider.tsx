import { createContext } from 'react';

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

import { app } from '../firebase';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const FirestoreContext = createContext(db);

const FirestoreContextProvider = (props: any) => {
  if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(db, 'localhost', 8080);
  }

  return (
    <FirestoreContext.Provider value={db}>
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContextProvider;
