import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';
import styled, { keyframes } from 'styled-components';
import { AuthContext } from '../../../context/authContext';
import { PhoneTodoAddForm } from '../../app/todo';

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
export const MenyItem = styled.button`
  color: #fff;
  font-size: 20px;
  border: none;
  background: none;
  outline: none;
`

export const MobileMenu: React.FC = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler =() =>{
    auth.logout();
    history.push('/auth');
  }
  return (
    <MenyContainer>
      <MenyItem>Главная</MenyItem>
      
      <Popup trigger={<div><MenyItem>Создать задачу</MenyItem></div>} position={['top center']} closeOnDocumentClick>
        <PhoneTodoAddForm />
      </Popup>
      <MenyItem onClick={()=>{logoutHandler()}}>Выйти</MenyItem>
    </MenyContainer>
  );
}