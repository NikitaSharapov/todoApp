import React from 'react';
import { Auth } from './pages/auth';
import { Reg } from './pages/reg';
import {TodoApp} from './pages/todoApp';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={TodoApp} path="/app" exact/>
          <Route component={Reg} path="/reg"/>
          <Route component={Auth} path="/auth"/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
