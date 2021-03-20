import styled from 'styled-components';
import { media } from '../..';

export const Wrapper = styled.div`  
  margin: 0 100px 0 100px;
  @media ${props =>media.desktop1340}{
    margin: 0 50px 0 50px;
  }
  @media ${props =>media.desktop850}{
    margin: 0 30px 0 30px;
  }
`