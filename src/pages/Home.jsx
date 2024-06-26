import { useUser } from '../../context/userContext'; 

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.userName}!</h1>
      ) : (
        <h1>Welcome, Guest!</h1>
      )}
    </div>
  );
}