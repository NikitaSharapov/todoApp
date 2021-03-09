import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../../../layout/wrapper';
import { TodoAddForm } from '../../app/todo';
import { NavButton } from '../button';
import { Logo } from '../logo';

export const Nav = styled.div`
  width: 1440px;
  background: #fff;
  margin: 0 auto;
  height: 80px;
  border-radius: 0px 0px 15px 15px;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
`
const NavContent = styled.div`
  display:grid;
  grid-template:80px/auto 3fr  auto;
  align-items: center;
`

// export const AppNav = styled.div`
// display:grid;
// grid-template:1fr/400px auto;
// justify-content: flex-end;
// align-items: center;
// `

export const BotNav = styled.div`
  width: 1440px;
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
          <NavLink to="/auth"><NavButton title={'Выйти'}/></NavLink>
        </NavContent>
      </Wrapper>
    </Nav>
  );
}