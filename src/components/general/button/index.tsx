import React from 'react';
import { BiCheck} from 'react-icons/bi';
import styled from 'styled-components';
import { media } from '../../..';

const NavButtonTitle = styled.p`
  font-size:20px;
  display: grid;
  justify-content:flex-end;
  cursor: pointer;
`

interface INavButton {
  title: string;
  onClick?:() => void;
}

export const NavButton: React.FC<INavButton> = (props) => {
  return (
    <NavButtonTitle {...props}>{props.title}</NavButtonTitle>
  );
}

const FormButtonTitle = styled.p`
  font-size:18px;
  background: #F7F6F6;
  padding:10px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`

interface IFormButton {
  title: string;
  onClick?: ()=>void;
}

export const FormButton: React.FC<IFormButton> = (props) => {
  return (
    <FormButtonTitle {...props}>{props.title}</FormButtonTitle>
  );
}

const WFormButtonTitle = styled.p`
  font-size:14px;
  background: #fff;
  padding:10px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`

interface IFormButton {
  title: string;
}

export const WhiteFormButton: React.FC<IFormButton> = (props) => {
  return (
    <WFormButtonTitle>{props.title}</WFormButtonTitle>
  );
}

const SubmitButton= styled.input`
  font-size:14px;
  background: #fff;
  padding:10px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 100%;
`

interface ISubmitFormButton {
  type: string;
  value: string;
  disabled?: boolean;
}

export const SubmitFormButton: React.FC<ISubmitFormButton> = (props) => {
  return (
    <SubmitButton {...props} type={props.type} value={props.value}  disabled={props.disabled}/>
  );
}

const GreySubmitButton= styled.input`
  font-size:18px;
  background: #F7F6F6;
  padding:10px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 100%;
`

interface IGreySubmitFormButton {
  type: string;
  value: string;
  disabled?: boolean;
}

export const GreySubmitFormButton: React.FC<IGreySubmitFormButton> = (props) => {
  return (
    <GreySubmitButton {...props} type={props.type} value={props.value}  disabled={props.disabled}/>
  );
}

const AddNewtodoButtonTitle = styled.p`
  font-size:15px;
  background:#fff;
  padding:10px 20px;
  border-radius: 5px;
  margin: 0 20px;
  text-align: center;

`

interface IAddNewtodoButton {
  title: string;
}

export const AddNewtodoButton: React.FC<IAddNewtodoButton> = (props) => {
  return (
    <AddNewtodoButtonTitle>{props.title}</AddNewtodoButtonTitle>
  );
}


const BotNavButtonTitle = styled.p`
  height: 60px;
  font-size:20px;
  display: none;
  justify-content:center;
  align-content: center;
  @media ${props =>media.desktop750}{
    display: grid;
  } 
`

interface IBotNavButton {
  title: string;
}

export const BotNavButton: React.FC<IBotNavButton> = (props) => {
  return (
    <BotNavButtonTitle>{props.title}</BotNavButtonTitle>
  );
}


const PhoneFormButtonTitle = styled.button`
  background: #F7F6F6;
  border-radius: 5px;
  display:grid;
  width:40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
`

interface IPhoneFormButton {
  type: string,
}

export const PhoneFormButton: React.FC<IPhoneFormButton> = (props) => {
  return (
    <PhoneFormButtonTitle ><BiCheck fontSize={20}/></PhoneFormButtonTitle>
  );
}