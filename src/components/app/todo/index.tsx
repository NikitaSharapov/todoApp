import React from 'react';
import styled from 'styled-components';
import {  FormButton } from '../../general/button';
import { ItemTitle, Title } from '../../general/title';
import { BiTrash } from "react-icons/bi";
import { Scrollbar } from "react-scrollbars-custom";

const TodoContainer = styled.div`
  padding-top: 50px;
  width:950px;
  display:grid;
  grid-template:1fr /1fr;
  justify-self: center;
  margin: 0 auto; 
`

const TodoList = styled.div`
  display:grid;
  justify-content: center;
`

const TodoAddContainer = styled.div`
  width: 750px;
  margin:10px 0;
  display:grid;
  grid-template:1fr /3fr 1fr;
  column-gap: 20px;
  justify-self: center;
`

const TodoItemContainer = styled.div`
  width:950px;
  display:grid;
  grid-template:1fr/50px 3fr 50px;
  justify-items: center;
  align-items: center;
  height:50px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
`

interface IAppTodoList {
  height: number;
}

export const AppTodoList: React.FC<IAppTodoList> = (props) => {
  return (
    <TodoContainer>
      <Title title={'Список задач'} />
      <Scrollbar style={{ width: 990, height: props.height-220 }}>
      <TodoList>
        {props.children}
      </TodoList>
      </Scrollbar>
    </TodoContainer>
  )
}

const FormInput = styled.input`
  font-size:18px;
  padding-left: 17px;
  border: none;
  border-radius: 5px;
  background: #F7F6F6;
`

export const TodoAddForm: React.FC = (props) => {
  return (
    <TodoAddContainer>
      <FormInput type="text" placeholder="Введите новую задачу"/>
      <FormButton title={'Добавить'} />
    </TodoAddContainer>
  )
}

const TodoCheckContainer = styled.div`
  width:18px;
  height:18px;
  border: 1px solid black;
  border-radius: 2px;
`

interface ITodoItem {
  title: string;
}

const TodoCheck: React.FC = (props) => {
  return (
    <TodoCheckContainer />
  )
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  return (
    <TodoItemContainer>
      <TodoCheck />
      <ItemTitle title={props.title} />
      <BiTrash fontSize={20}/>
    </TodoItemContainer>
  )
}