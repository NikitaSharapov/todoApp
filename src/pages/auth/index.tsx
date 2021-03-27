import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthForm, Formlayout } from '../../components/app/form';
import { EmptyBotNav, Nav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import useWindowDimensions from '../../utils/hooks/hook.windowDimensions';

export const Auth: React.FC = (props) =>{
  const token = localStorage.getItem("userToken");
  const { height } = useWindowDimensions();
  return (
    <>
    {!token ? '' :<Redirect to={{ pathname: '/app'}} /> }
      <TodoAppLayout height={height - 60} >
      <Nav />
      <Formlayout height={height - 200}>
        <AuthForm />
      </Formlayout>
      </TodoAppLayout>
      <EmptyBotNav/>
    </>
  )
}