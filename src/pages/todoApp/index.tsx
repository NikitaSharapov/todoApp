import React from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { TodoItemForm } from '../../components/app/form';
import { AppTodoList, TodoItem } from '../../components/app/todo';
import { BotNav, TopNav } from '../../components/general/nav';
import { EmptyTitle } from '../../components/general/title';
import { TodoAppLayout } from '../../layout/app';
import { IRootState } from '../../store/types/store';
import useWindowDimensions from '../../utils/hooks/hook.windowDimensions';

export const TodoApp: React.FC = (props) =>{
  const todolist = useSelector((state: IRootState) => state.loadTodoList.todolist);
  let todolistArray: any[] = [];
  if(todolist){
    todolistArray = Object.values(todolist);
  }
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
        <TopNav />
        <AppTodoList height={height - 60}>
          {todolistArray.map((item) => {
            if(item.length === 0){
              return (<EmptyTitle>Пусто :(</EmptyTitle>)
            }
            else{
              const todoItem = Object.values(item);
              return todoItem.map((item: any)=>{
              return (<Popup key={item._id} modal nested trigger={<div><TodoItem key={item._id} title={item.title}/></div>} position={['center center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
              <TodoItemForm height={height - 140} key={item._id} title={item.title} desc={item.desc}/>
              </Popup>) })
            }
          })}
        </AppTodoList>
      </TodoAppLayout>
      <BotNav />
    </>
  )
}