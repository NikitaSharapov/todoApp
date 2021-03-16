import React from 'react';
import styled from 'styled-components';
import { media } from '../../..';

const BigTitle = styled.p`
  font-family: IBMPlexSans-SemiBold;
  padding-bottom:15px;
  font-size: 24px;
  padding-left:20px;
`

export const FormTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  padding-bottom:15px;
  font-size: 20px;
`

const AppItemTitle = styled.p`
  font-size: 18px;
  display: grid;
  grid-template: 1fr/1fr;
  justify-self: flex-start;
  
`

export const ErrorTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  padding-bottom:15px;
  padding-left: 5px;
  font-size: 14px;
`

interface ITitle {
  title: string;
}

export const Title: React.FC<ITitle> = (props) => {
  return (
    <BigTitle>{props.title}</BigTitle>
  );
}

interface IItemTitle {
  title: string;
}

export const ItemTitle: React.FC<IItemTitle> = (props) => {
  return (
    <AppItemTitle>{props.title}</AppItemTitle>
  );
}
