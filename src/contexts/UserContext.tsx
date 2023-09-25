import { createContext, useEffect, useState, useContext } from 'react';

import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import { app } from '../firebase';

const auth = getAuth(app);
export const UserContext = createContext<User | undefined>(undefined);

export const useAuth = () => useContext(UserContext);

const UserContextProvider = (props: any) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    onAuthStateChanged(auth, (userState) => {
      if (userState) {
        setUser(userState);
      } else {
        setUser(undefined);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
