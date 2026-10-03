/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(data);
    }
  }, []);

  const register = useCallback(async data => {
    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json);
      console.log(json);
      localStorage.setItem('user', JSON.stringify(json));
      setUser(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const login = useCallback(async data => {
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json);
      console.log(json);
      localStorage.setItem('user', JSON.stringify(json));
      setUser(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const contextValue = useMemo(() => ({ user, register, login }), [user]);
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
export default LoginContext;
