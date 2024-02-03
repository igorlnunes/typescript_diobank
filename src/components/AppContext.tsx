import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
  user: string,
  setUser: (user: string) => void,
  password: string,
  setPassword: (password: string) => void,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login, user, password } = JSON.parse(storage);
      setIsLoggedIn(login);
      setUser(user);
      setPassword(password);
    }
  }, []);


  return (
    <AppContext.Provider value={{ user, password, isLoggedIn, setUser, setPassword, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}