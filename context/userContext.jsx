import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/profile').then(({ data }) => {
      if (data.userName) {
        setUser(data);
      }
    }).catch(error => {
      console.error("Error fetching profile:", error);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);