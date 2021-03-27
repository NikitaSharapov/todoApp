import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { AuthContext } from './context/authContext';
import { useRoutes } from './routing';
import { useAuth } from './utils/hooks/auth.hook';
import {Provider} from 'react-redux';
import {store} from './store';

function App() {
  const {token, login, logout} = useAuth();
  const routes = useRoutes();
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{
        token,
        login,
        logout,
      }}>
          <Router>
            {routes}
          </Router>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
