import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../..';
import { Wrapper } from '../../../layout/wrapper';
import { PhoneTodoAddForm, TodoAddForm } from '../../app/todo';
import { BotNavButton, NavButton } from '../button';
import { Logo } from '../logo';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Popup from 'reactjs-popup';
import { MobileMenu } from '../menu';
import { logout } from '../../../utils/fetch';

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
  grid-template:80px/auto 3fr  auto;
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
// export const AppNav = styled.div`
// display:grid;
// grid-template:1fr/400px auto;
// justify-content: flex-end;
// align-items: center;
// `

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
  return (
    <Nav>
      <Wrapper>
        <NavContent>
          <Logo />
          <TodoAddForm />
          <NavLink to="/auth" ><NavButton title={'Выйти'} onClick={()=>logout()}/></NavLink>
        </NavContent>
        <PhoneTopNav />
      </Wrapper>
    </Nav>
  );
}

export const PhoneTopNav: React.FC = () => {
  return (
    <PhoneNavContent>
      <Popup trigger={<div><BiDotsHorizontalRounded fontSize={45}/></div>} position={['bottom center']} closeOnDocumentClick>
        <MobileMenu />
      </Popup>
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
