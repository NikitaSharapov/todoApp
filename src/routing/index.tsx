import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';
import { Lending } from '../pages/lending';
import { Reg } from '../pages/reg';
import { TodoApp } from '../pages/todoApp';

export const useRoutes = () => {
    return(
      <Switch>
        <Route exact path="/" component={Lending}/>
        <Route path="/reg" component={Reg} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/app" component={TodoApp} />
      </Switch>
    )
}