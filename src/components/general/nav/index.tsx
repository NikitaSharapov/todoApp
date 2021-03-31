import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../..';
import { Wrapper } from '../../../layout/wrapper';
import { PhoneTodoAddForm, TodoAddForm } from '../../app/todo';
import { BotNavButton, NavButton } from '../button';
import { Logo } from '../logo';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Popup from 'reactjs-popup';
import { AuthContext } from '../../../context/authContext';
import { ModalVoiceInfo } from '../../app/modalVoiceInfo';
import {
  Menu,
  MenuItem,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './menuStyle.css';

export const Nav = styled.div`
  background: #fff;
  margin: 0 auto;
  height: 80px;
  border-radius: 0px 0px 15px 15px;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  @media ${props =>media.desktop750}{
    height: 60px;
  } 
`

const NavContent = styled.div`
  display:grid;
  grid-template:80px/auto 3fr auto auto;
  align-items: center;
  @media ${props =>media.desktop750}{
    display: none;
  } 
`
const PhoneNavContent = styled.div`
  display:none;
  grid-template:80px/1fr;
  align-items: center;
  justify-items: flex-end;
  @media ${props =>media.desktop750}{
    display: grid;
  } 
  @media ${props =>media.desktop750}{
    grid-template:60px/1fr;
  } 
`
const BNav = styled.div`
  background: #fff;
  height: 50px;
  border-radius: 15px 15px 0 0;
  padding-bottom: 10px;
  margin: 0 auto;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
`

export const TopNav: React.FC = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler =() =>{
    auth.logout();
    history.push('/auth');
  }
  return (
    <Nav>
      <Wrapper>
        <NavContent>
          <Logo />
          <TodoAddForm />
          <NavButton title={'Выйти'} onClick={()=>{logoutHandler()}}/>
        </NavContent>
        <PhoneTopNav />
      </Wrapper>
    </Nav>
  );
}

export const PhoneTopNav: React.FC = () => {
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
    <PhoneNavContent>
      <Menu menuButton={<button className={'menuButton'}><BiDotsHorizontalRounded fontSize={45}/></button>}>
        <MenuItem onClick={()=>{link()}}>Главная</MenuItem>
        <MenuItem>
          <Popup modal trigger={<p>Создать задачу</p>} position={['top center']} closeOnDocumentClick>
            <PhoneTodoAddForm />
          </Popup>
        </MenuItem>
        <MenuItem><Popup modal trigger={<p>Голосовое управление</p>} position={['top center']} closeOnDocumentClick overlayStyle={{background: 'rgba(0,0,0,.4'}}>
          {(close: any) => (
            <ModalVoiceInfo close={()=>close()}/>
            )}
          </Popup>
        </MenuItem>
        <MenuItem onClick={()=>{logoutHandler()}}>Выйти</MenuItem>
      </Menu>
    </PhoneNavContent>
  );
}

export const BotNav: React.FC = () => {
  return (
    <BNav>
      <Popup trigger={<div><BotNavButton title={'Создать задачу'}/></div>} position={['top center']} closeOnDocumentClick>
        <PhoneTodoAddForm />
      </Popup>
    </BNav>
  );
}

export const EmptyBotNav: React.FC = () => {
  return (
    <BNav>

    </BNav>
  );
}
