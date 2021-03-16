import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthContext } from './context/authContext';
import { useRoutes } from './routing';
import { useAuth } from './utils/hooks/auth.hook';


function App() {
  const {token, login, logout} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      token,
      login,
      logout,
      isAuthenticated
    }}>
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
