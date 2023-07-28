import { useAuth } from '../contexts/UserContext';

const DevBar = () => {
  const user = useAuth();
  return (
    <div>
      <p>{process.env.NODE_ENV} bar</p>
      <p>
        LOGIN STATUS: <span>{user?.uid ? 'Logged' : 'Not Logged'}</span>
      </p>
      <p>
        NAME: <span>{user?.displayName}</span>
      </p>
    </div>
  );
};

export default DevBar;
