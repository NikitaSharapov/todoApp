import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';
import { Reg } from '../pages/reg';
import { TodoApp } from '../pages/todoApp';

export const useRoutes = (isAuthenticated: boolean) => {
  localStorage.getItem('userToken');
  if(isAuthenticated){
    return(
      <Switch>
        <Route component={TodoApp} path="/app" exact/>
        <Route component={Reg} path="/reg" exact/>
        <Route component={Auth} path="/auth" exact/>
        <Redirect to={'/app'}/>
      </Switch>
    )
  }
  return(
    <Switch>
      <Route component={Reg} path="/reg"/>
      <Route component={Auth} path="/auth"/>
      <Redirect to={'/auth'}/>
    </Switch>
  )
}