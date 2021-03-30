import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';
import styled, { keyframes } from 'styled-components';
import { AuthContext } from '../../../context/authContext';
import { ModalVoiceInfo } from '../../app/modalVoiceInfo';
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
  text-align: start;
`

export const MobileMenu: React.FC = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler =() =>{
    auth.logout();
    history.push('/auth');
  }
  const link = () => {
    history.push('/');
  }
  return (
    <MenyContainer>
      <MenyItem onClick={()=>{link()}} >Главная</MenyItem>
      <Popup modal trigger={<div><MenyItem>Создать задачу</MenyItem></div>} position={['top center']} closeOnDocumentClick>
        <PhoneTodoAddForm />
      </Popup>
      <Popup modal trigger={<div><MenyItem>Голосовое управление</MenyItem></div>} position={['top center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
      {(close: any) => (
        <ModalVoiceInfo close={()=>close()}/>
        )}
      </Popup>
      <MenyItem onClick={()=>{logoutHandler()}}>Выйти</MenyItem>
    </MenyContainer>
  );
}