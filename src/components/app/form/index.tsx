import React from 'react';
import styled from 'styled-components';
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

const FormButtonTitle = styled.a`
  display: grid;
  grid-template: 1fr/1fr;
  font-size:14px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
`

interface IFormButton {
  title: string;
}

export const FormButton: React.FC<IFormButton> = (props) => {
  return (
    <FormButtonTitle>{props.title}</FormButtonTitle>
  );
}

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