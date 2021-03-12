import React from 'react';
import styled, { keyframes } from 'styled-components';
import {  FormButton, PhoneFormButton } from '../../general/button';
import { ItemTitle, Title } from '../../general/title';
import { BiTrash } from "react-icons/bi";
import { Scrollbar } from "react-scrollbars-custom";
import { media } from '../../..';

const TodoContainer = styled.div`
  padding-top: 50px;
  width:990px;
  display:grid;
  grid-template:1fr /1fr;
  justify-self: center;
  margin: 0 auto;
  @media ${props =>media.desktop1000}{
    width: 100%;
  } 
`

const TodoList = styled.div`
  display:grid;
  justify-content: center;
  @media ${props =>media.desktop1000}{
    display: block;
    
  }
`

const TodoAddContainer = styled.div`
  width: 750px;
  margin:10px 0;
  display:grid;
  grid-template:1fr /3fr 1fr;
  column-gap: 20px;
  justify-self: center;
  @media ${props =>media.desktop1340}{
    width: 550px;
  }
  @media ${props =>media.desktop1000}{
    width: 450px;
  }
`

const TodoItemContainer = styled.div`
  width:950px;
  display:grid;
  grid-template:1fr/50px 3fr 50px;
  justify-items: center;
  align-items: center;
  height:auto;
  padding-top:20px;
  padding-bottom:20px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  word-wrap: break-word;
  @media ${props =>media.desktop1000}{
    width: auto;
    margin: 0 10px 10px 10px;
  }
`

interface IAppTodoList {
  height: number;
}

export const AppTodoList: React.FC<IAppTodoList> = (props) => {
  return (
    <TodoContainer>
      <Title title={'Список задач'} />
      <Scrollbar style={{ height: props.height-220 }}>
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

const anim = keyframes`
0% {
  transform: scale(1) translateY(0px);
  opacity: 0;
}

100% {
  transform: scale(1) translateY(0px);
  opacity: 1;
}
`;


const PhoneTodoAddContainer = styled.div`
  animation: ${anim} .1s linear;
  padding: 0 10px;
  display:grid;
  grid-template:40px /2fr auto;
  column-gap: 10px;
  justify-self: center;
  align-content: center;
  background: #fff;
  position: fixed;
  bottom: 0;
  left:0;
  right: 0;
  height: 80px;
`

const PhoneFormInput = styled.input`
  font-size:13px;
  padding-left: 17px;
  border: none;
  border-radius: 5px;
  background: #F7F6F6;
`

export const PhoneTodoAddForm: React.FC = (props) => {
  return (
    <PhoneTodoAddContainer>
      <PhoneFormInput type="text" placeholder="Введите новую задачу"/>
      <PhoneFormButton title={'Добавить'} />
    </PhoneTodoAddContainer>
  )
}