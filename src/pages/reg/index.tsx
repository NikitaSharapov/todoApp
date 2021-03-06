import React from 'react';
import {  Formlayout, RegForm } from '../../components/app/form';
import { EmptyBotNav, Nav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import useWindowDimensions from '../../utils/hooks/hook.windowDimensions';


export const Reg: React.FC = (props) =>{
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
      <Nav />
      <Formlayout height={height - 200}>
        <RegForm />
      </Formlayout>
      </TodoAppLayout>
      <EmptyBotNav />
    </>
  )
}