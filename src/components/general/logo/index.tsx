import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/Logo.svg';

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
  return(
    <LogoContainer>
      <img src={logo} alt={'logo'}></img>
      <LogoTitle >
        Ту-Ду
      </LogoTitle>
    </LogoContainer>
  )
}