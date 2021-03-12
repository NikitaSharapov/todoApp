import React from 'react';
import styled, { keyframes } from 'styled-components';

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

export const MenyContainer = styled.div`
  animation: ${anim} .1s linear;
  background: #000;
  position: fixed;
  display: grid;
  grid-template: 1fr 1fr 1fr/ 150px;
  border-radius: 10px 0 10px 10px;
  row-gap: 15px;
  padding: 15px;
  right: 0;
  top: 0;
`
export const MenyItem = styled.p`
  color: #fff;
  font-size: 20px;
`

export const MobileMenu: React.FC = () => {
  return (
    <MenyContainer>
      <MenyItem>Главная</MenyItem>
      <MenyItem>Создать задачу</MenyItem>
      <MenyItem>Выйти</MenyItem>
    </MenyContainer>
  );
}