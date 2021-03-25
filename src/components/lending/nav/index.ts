import styled from 'styled-components';
import { media } from '../../..';

export const LendTopNav = styled.div`
  background: #fff;
  margin: 0 auto;
  height: 80px;
  @media ${props =>media.desktop1440}{
    width:100%;
  } 
`
export const TopNavContent = styled.div`
  display:grid;
  grid-template:80px/auto 3fr;
  align-items: center;
  
`