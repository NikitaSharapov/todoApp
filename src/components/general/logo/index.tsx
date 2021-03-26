import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/images/Logo.png';

const LogoContainer = styled.div`
  display:grid;
  grid-template: 70px/58px 70px;
  justify-items: center;
  align-items: center;
`
const LogoTitle = styled.h1`
  font-size:24px;
`
export const Logo = () => {
  const history = useHistory();
  const link = () => {
    history.push('/');
  }
  return(
    <LogoContainer onClick={()=>{link()}}>
      <img src={logo} alt={'logo'}></img>
      <LogoTitle >
        Ту-Ду
      </LogoTitle>
    </LogoContainer>
  )
}