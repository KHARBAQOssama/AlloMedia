import { createContext, useState, useContext } from 'react';
import api from '../api';
import { data } from 'autoprefixer';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: null,
    password : null,
  });

  const register = async () => {
    try {
      let data = await api.post('/auth/register' , user)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return data;
  }
  const login = async () => {
    try {
      let data = await api.post('/auth/login' , user)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return data
  }

  return (
    <UserContext.Provider value={{ user, setUser,register , login}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
