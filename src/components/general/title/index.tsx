import React from 'react';
import styled from 'styled-components';

export const BigTitle = styled.p`
  font-family: IBMPlexSans-SemiBold;
  padding-bottom:15px;
  font-size: 24px;
  padding-left:20px;
`
export const VoiceInfoBigitle = styled.p`
  font-family: IBMPlexSans-SemiBold;
  font-size: 21px;

`

export const FormTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  padding-bottom:15px;
  font-size: 20px;
`

export const EmptyTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  text-align: center;
  font-size: 20px;
`

const AppItemTitle = styled.p`
  font-size: 18px;
  justify-self: flex-start;
  padding-top:20px;
  padding-bottom:20px;
`

export const ErrorTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  padding-bottom:15px;
  padding-left: 5px;
  font-size: 14px;
`

export const VoiceInfoTitle = styled.p`
  font-family: IBMPlexSans-Regular;
  padding-bottom:20px;
  font-size: 18px;
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
