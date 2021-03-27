import React from 'react';
import {  useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppTodoList } from '../../components/app/todo';
import { BotNav, TopNav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import { fetchLoadTodoList } from '../../store/actions/loadTodoList';
import useWindowDimensions from '../../utils/hooks/hook.windowDimensions';


export const TodoApp: React.FC = (props) =>{
  const token = localStorage.getItem("userToken");
  const dispatch = useDispatch();
  dispatch(fetchLoadTodoList());
  const { height } = useWindowDimensions();
  return (
    <>
    {!token ? <Redirect to={{ pathname: '/auth'}} />:'' }
      <TodoAppLayout height={height - 60} >
        <TopNav />
        <AppTodoList height={height - 60} />
      </TodoAppLayout>
      <BotNav />
    </>
  )
}