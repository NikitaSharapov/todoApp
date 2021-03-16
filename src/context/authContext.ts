import { createContext } from 'react';

function zachem_ua_sozdana(arg: any) {};
function zachem_ua_sozdana2() {};

export const AuthContext = createContext({
  token: null,
  login: zachem_ua_sozdana,
  logout: zachem_ua_sozdana2,
  isAuthenticated: false,
});