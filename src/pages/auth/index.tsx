import React from 'react';
import { AuthForm, Formlayout } from '../../components/app/form';
import { BotNav, Nav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import useWindowDimensions from '../../utils/index';


export const Auth: React.FC = (props) =>{
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
      <Nav />
      <Formlayout height={height - 200}>
        <AuthForm />
      </Formlayout>
      </TodoAppLayout>
      <BotNav />
    </>
  )
}