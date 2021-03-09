import React from 'react';
import styled from 'styled-components';

const NavButtonTitle = styled.a`
  font-size:20px;
  display: grid;
  justify-content:flex-end;
`

interface INavButton {
  title: string;
}

export const NavButton: React.FC<INavButton> = (props) => {
  return (
    <NavButtonTitle>{props.title}</NavButtonTitle>
  );
}

const FormButtonTitle = styled.a`
  font-size:18px;
  background: #F7F6F6;
  padding:10px 20px;
  border-radius: 5px;
  text-align: center;
`

interface IFormButton {
  title: string;
}

export const FormButton: React.FC<IFormButton> = (props) => {
  return (
    <FormButtonTitle>{props.title}</FormButtonTitle>
  );
}

const AddNewtodoButtonTitle = styled.a`
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