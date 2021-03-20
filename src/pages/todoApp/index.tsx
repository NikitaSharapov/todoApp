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
  // @ts-ignore
  const todolist = useSelector((state) => state.loadTodoList.todolist);
  let todolistArray: any[] = [];
  if(todolist){
    todolistArray = Object.values(todolist);
    console.log('todolist ', todolistArray);
  }
  const { height } = useWindowDimensions();
  return (
    <>
      <TodoAppLayout height={height - 60} >
        <TopNav />
        <AppTodoList height={height - 60}>
          {todolistArray.map((item, index) => {
            if(item.length === 0){
              console.log('item', item);
              
              return (<EmptyTitle>Пусто :(</EmptyTitle>)
            }
            else{
              const todoItem = Object.values(item);

              // @ts-ignore
              return todoItem.map((item, index)=>{
  
                // @ts-ignore
              return (<Popup modal nested trigger={<div><TodoItem key={item._index} title={item.title}/></div>} position={['center center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
              {/* @ts-ignore */}
              <TodoItemForm height={height - 140} key={item._index} title={item.title} desc={item.desc}/>
              </Popup>) })
            }
          })}
        </AppTodoList>
      </TodoAppLayout>
      <BotNav />
      </>
  )
}