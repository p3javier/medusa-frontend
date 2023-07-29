import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';

import UserWidget from '../components/userWidget/UserWidget';
import { useAuth } from '../contexts/UserContext';

const LinkElem = ({ children }: { children: JSX.Element }) => {
  return (
    <button className="border p-1 mx-2 rounded hover:bg-violet-200 hover:bg-opacity-50">
      {children}
    </button>
  );
};

const UserBox = () => {
  const user = useAuth();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <>
      {user?.uid && user?.emailVerified ? (
        <>
          <UserWidget />
          <div onClick={handleSignOut}>
            <LinkElem>
              <a className="text-violet-200">Cerrar sesión</a>
            </LinkElem>
          </div>
        </>
      ) : (
        <>
          <Link href="/registro">
            <a>
              <LinkElem>
                <div className="text-violet-200">Registrarse</div>
              </LinkElem>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <LinkElem>
                <div className="text-violet-200">Acceder</div>
              </LinkElem>
            </a>
          </Link>
        </>
      )}
    </>
  );
};

export default UserBox;
