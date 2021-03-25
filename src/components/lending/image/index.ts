import styled from 'styled-components';
import { media } from '../../..';

interface IImage {
  onClick?: () => void;
}

export const Image = styled.img`
  @media ${props =>media.desktop1440}{
    width: 100%;
  } 
`

export const TechImage = styled.img<IImage>`
  cursor: pointer;
  @media ${props =>media.desktop450}{
    width: 45%;
  }
  @media ${props =>media.desktop400}{
    width: 35%;
  }  
`

export const TopImage = styled.img`
  @media ${props =>media.desktop1440}{
    width: 100%;
  }
  @media ${props =>media.desktop700}{
    display:none;
  }  
`