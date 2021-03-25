import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';
import { Lending } from '../pages/lending';
import { Reg } from '../pages/reg';
import { TodoApp } from '../pages/todoApp';

export const useRoutes = (isAuthenticated: boolean) => {
  localStorage.getItem('userToken');
  if(isAuthenticated){
    return(
      <Switch>
        <Route exact path="/" component={Lending} />
        <Route path="/app" component={TodoApp} />
        <Route path="/reg" component={Reg}  />
        <Route path="/auth" component={Auth}  />
        <Redirect to={'/app'}/>
      </Switch>
    )
  }
  return(
    <Switch>
      <Route exact path="/" component={Lending} />
      <Route component={Reg} path="/reg"/>
      <Route component={Auth} path="/auth"/>
      <Redirect to={'/auth'}/>
    </Switch>
  )
}