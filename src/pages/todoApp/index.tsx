import React from 'react';
import { AppTodoList, TodoItem } from '../../components/app/todo';
import { BotNav, TopNav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import useWindowDimensions from '../../utils/index';


export const TodoApp: React.FC = (props) =>{
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
        <TopNav />
        <AppTodoList height={height - 60}> 
          <TodoItem title={'Заголовок 1'}/>
          <TodoItem title={'Заголовок 2'}/>
          <TodoItem title={'Заголовок 1'}/>
          <TodoItem title={'Заголовок 2'}/>
          <TodoItem title={'Заголовок 1'}/>
          <TodoItem title={'Заголовок 1'}/>
        </AppTodoList>
      </TodoAppLayout>
      <BotNav />
      </>
  )
}