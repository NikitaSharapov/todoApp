import styled from 'styled-components';
import { media } from '../../..';

export const LendBigTitle = styled.p`
  font-family: IBMPlexSans-SemiBold;
  font-size: 24px;
  padding-bottom: 10px;
  @media ${props =>media.desktop800}{
    text-align: center;
  } 
`