import { createContext } from 'react';

import { getAuth, connectAuthEmulator } from 'firebase/auth';

import { app } from '../firebase';

const auth = getAuth(app);
export const AuthContext = createContext(auth);

const AuthContextProvider = (props: any) => {
  connectAuthEmulator(auth, 'http://localhost:9099');
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
