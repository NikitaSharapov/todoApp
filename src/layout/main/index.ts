import styled from 'styled-components';
import { media } from '../..';

export const MainLayout = styled.div`
  width: 1440px;
  background: #F7F6F6;
  margin: 0 auto;
  @media ${props =>media.desktop1440}{
    width: 100%;
  }
`

export const TopSection = styled.div`
  background: #fff;
`
export const TopSectionContent = styled.div`
  display:grid;
  grid-template: 760px/1fr 1fr;
  align-items: center;
  background: #fff;
  @media ${props =>media.desktop700}{
    grid-template: 760px/1fr;
  }  
`

export const Opportunities = styled.div`
  display:grid;

`

export const OpportunitiesContentLeft = styled.div`
  padding-top:100px;
  padding-bottom:100px;
  display:grid;
  grid-template:1fr/3fr 1fr;
  align-items: center;
  justify-items: flex-start;
  column-gap: 10px;
  @media ${props =>media.desktop1440}{
    grid-template:1fr/2fr 1fr;
  } 
  @media ${props =>media.desktop800}{
    grid-template:1fr 1fr/ 1fr;
    justify-items: center;
  } 
`

export const OpportunitiesContentRight = styled.div`
  padding-top:100px;
  padding-bottom:100px;
  display:grid;
  grid-template:1fr/1fr 3fr;
  align-items: center;
  justify-items: flex-end;
  column-gap: 10px;
  @media ${props =>media.desktop1440}{
    grid-template:1fr/1fr 2fr;
  }
  @media ${props =>media.desktop800}{
    grid-template:1fr 1fr/ 1fr;
    justify-items: center;
  }  
`

export const BottomBlock = styled.div`
display: grid;
justify-items: center;
height:800px;
align-items: center;
`

export const BottomBlockContent = styled.div`
display: grid;
justify-items: center;
align-items: center;
`
export const TechImageBlock = styled.div`
margin-top:50px;
display: grid;
grid-template:1fr/1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
justify-items: center;
align-items: center;
@media ${props =>media.desktop1440}{
  grid-template:1fr 1fr / auto auto auto auto;
  }
  @media ${props =>media.desktop700}{
    grid-template: 760px/1fr;
    grid-template:1fr 1fr 1fr/ 1fr 1fr;
    row-gap: 20px;
  } 
`
export const TechTextBlock = styled.div`
margin-top:50px;
display: grid;
grid-template:1fr/1fr;
justify-items: center;
align-items: center;
background: #fff;
`
