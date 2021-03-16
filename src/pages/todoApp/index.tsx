import React from 'react';
import Popup from 'reactjs-popup';
import { TodoItemForm } from '../../components/app/form';
import { AppTodoList, TodoItem } from '../../components/app/todo';
import { BotNav, TopNav } from '../../components/general/nav';
import { TodoAppLayout } from '../../layout/app';
import useWindowDimensions from '../../utils/hooks/hook.windowDimensions';


export const TodoApp: React.FC = (props) =>{
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
        <TopNav />
        <AppTodoList height={height - 60}>
          <Popup modal nested trigger={<div><TodoItem title={'Заголовок 1 sdfffffffsd fsdf4323 423423fa sdf2c3tr5 asdasdasdasdasdasd'}/></div>} position={['center center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
          <TodoItemForm height={height - 140} />
          </Popup> 
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