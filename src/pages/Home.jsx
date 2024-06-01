import React from 'react';
import { useUser } from '../../context/userContext'; // Adjust the path if necessary

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user ? user.userName : 'Guest'}!</h1>
    </div>
  );
}