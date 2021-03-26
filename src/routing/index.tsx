import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';
import { Lending } from '../pages/lending';
import { Reg } from '../pages/reg';
import { TodoApp } from '../pages/todoApp';

export const useRoutes = (isAuthenticated: boolean) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(localStorage.getItem('userToken')||"{}");
  }, [])
  if(token){
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
    </Switch>
  )
}