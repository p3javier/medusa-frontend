import { useAuth } from '../../contexts/UserContext';

const UserWidget = () => {
  const user = useAuth();
  const handleClick = () => {
    window.location.replace('/cuenta');
  };
  return (
    <button
      onClick={handleClick}
      className="w-32 p-1 mx-2 rounded text-violet-200 bg-violet-200 bg-opacity-50 text-center transition ease-in-out delay-100 hover:shadow-2xl hover:-translate-y-1"
    >
      {user?.displayName}
    </button>
  );
};

export default UserWidget;
