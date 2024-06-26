import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext } from 'react';
import '../src/axiosConfig'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/profile')
      .then(({ data }) => {
        if (data.userName) {
          setUser(data);
        }
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const logout = () => {
    setUser(null);
    // Perform any other logout tasks like clearing cookies or session data
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);