/**
 * 1) Tentar copiar o AppContext; de forma a passar o username e o password;
 * 2) Colocar o username e password no localStorage;
 * 3) Esse contexto irá sinalizar um estado global - passando o username e o password;
 */

import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface ILoginContext {
  user: string,
  password: string,
}

export const LoginContext = createContext({} as ILoginContext);

export const LoginContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { user, password } = JSON.parse(storage);
      setUser(user);
      setPassword(password);
    }
  }, []);


  return (
    <LoginContext.Provider value={{ user, password }}>
      {children}
    </LoginContext.Provider>
  )
}