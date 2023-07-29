import { useAuth } from '../contexts/UserContext';

const DevBar = () => {
  const user = useAuth();
  return (
    <div>
      <p>{process.env.NODE_ENV} bar</p>
      <div>
        LOGIN STATUS: <span>{user?.uid ? 'Logged' : 'Not Logged'}</span>
      </div>
      <div>
        NAME: <span>{user?.displayName}</span>
      </div>
      <div>VERIFIED?: {user?.emailVerified.toString()}</div>
    </div>
  );
};

export default DevBar;
