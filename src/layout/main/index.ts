import styled from 'styled-components';

export const MainLayout = styled.div`
  width: 1440px;
  background: #F7F6F6;
  margin: 0 auto;
  
`

export const TopSection = styled.div`
  background: #fff;
`
export const TopSectionContent = styled.div`
  display:grid;
  grid-template: 760px/1fr 1fr;
  align-items: center;
  background: #fff;
`

export const Opportunities = styled.div`
  display:grid;

`

export const OpportunitiesContent = styled.div`
  padding-top:100px;
  padding-bottom:100px;
  display:grid;
  grid-template:1fr/3fr 1fr;
  align-items: center;
  column-gap: 10px;
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
`
export const TechTextBlock = styled.div`
margin-top:50px;
display: grid;
grid-template:1fr/1fr;
justify-items: center;
align-items: center;
background: #fff;
`
