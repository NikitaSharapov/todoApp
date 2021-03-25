import styled from 'styled-components';
import { media } from '../../..';

export const TopDesc = styled.div`
font-size: 20px;
@media ${props =>media.desktop800}{
    text-align: center;
  } 
`
export const TechDesc = styled.div`
padding: 100px 100px;
font-size: 24px;
@media ${props =>media.desktop550}{
  font-size: 18px;
  }
  @media ${props =>media.desktop450}{
  font-size: 14px;
  }  
`