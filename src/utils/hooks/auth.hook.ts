import { useCallback, useEffect, useState } from "react";

const storageItemName = 'userToken';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const login = useCallback(
    (jwtToken) => {
      setToken(jwtToken);
      localStorage.setItem(storageItemName, JSON.stringify(jwtToken));
    },
    [],
  );
  const logout = useCallback(
    () => {
      setToken(null);
      localStorage.removeItem(storageItemName);
    },
    [],
  );
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageItemName)|| '{}');
    if(data && data.token){
      login(data.token);
    }
    setReady(true)
  }, [login]);
  return {login, logout, token, ready};
}