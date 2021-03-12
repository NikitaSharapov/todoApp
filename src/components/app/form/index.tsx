import React from 'react';
import styled from 'styled-components';
import { media } from '../../..';
import { FormButton } from '../../general/button';
import { FormTitle } from '../../general/title';

const FormContent = styled.div`
  display:grid;
  align-items: center;
  width: 280px;
  justify-self: center;
`



const FormNavButton = styled.div`
  display:grid;
  grid-template:1fr/1.5fr 1fr;
  column-gap: 10px;
`

const Input = styled.input`
  height: 50px;
  border: none;
  margin-bottom: 10px;
  padding-left: 14px;
  font-size: 14px;
  border-radius: 5px;
`


export const AuthForm: React.FC = (props) =>{
  return (
    <>
      <FormContent>
        <FormTitle>
          Регистрация
        </FormTitle>
        <Input type="text" placeholder="Введите логин"/>
        <Input type="password" placeholder="Введите пароль"/>
        <FormNavButton>
          <FormButton title={'Подтвердить'}/>
          <FormButton title={'Регистрация'}/>
        </FormNavButton>
      </FormContent>
    </>
  )
}

interface IFormlayout {
  height: number;
}

export const FormlayoutContent = styled.div<IFormlayout>`
  display:grid;
  grid-template:1fr/1fr;
  align-items: center;
  justify-content: center;
  height: ${props => props.height+'px' || '100vh'};
`

export const Formlayout: React.FC<IFormlayout> = (props) => {
  return (
    <FormlayoutContent {...props}>
      {props.children}
    </FormlayoutContent>
  )
}


export const RegForm: React.FC = (props) =>{
  return (
    <>
      <FormContent>
        <FormTitle>
          Авторизация
        </FormTitle>
        <Input type="text" placeholder="Введите эль. почту"/>
        <Input type="text" placeholder="Введите логин"/>
        <Input type="password" placeholder="Введите пароль"/>
        <FormNavButton>
          <FormButton title={'Подтвердить'}/>
          <FormButton title={'Авторизация'}/>
        </FormNavButton>
      </FormContent>
    </>
  )
}

const TextArea = styled.textarea`
  height: 300px;
  border: none;
  margin-bottom: 10px;
  padding-top: 14px;
  padding-left: 14px;
  font-size: 14px;
  border-radius: 5px;
  background: #F7F6F6;
  border-radius: 5px;
`


interface IFormContainer {
  height: number;
}

const FormContainer = styled.div<IFormContainer>`
  display:grid;
  grid-template:1fr/1fr;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);


`

const TodoItemInput = styled.input`
  height: 50px;
  border: none;
  margin-bottom: 10px;
  padding-left: 14px;
  font-size: 14px;
  background: #F7F6F6;
  border-radius: 5px;
`

const TodoItemFormContent = styled.div`
  display:grid;
  align-items: center;
  width: 450px;
  justify-self: center;
  @media ${props =>media.desktop550}{
    width:100%;
  } 
`

export const TodoItemForm: React.FC<IFormContainer> = (props) =>{
  return (
    <FormContainer  {...props} >
      <TodoItemFormContent >
        <TodoItemInput type="text" value="Заголовок 1"/>
        <TextArea placeholder="Описание" />
        <FormNavButton>
          <FormButton title={'Подтвердить'}/>
          <FormButton title={'Удалить'}/>
        </FormNavButton>
      </TodoItemFormContent>
    </FormContainer>
  )
}
