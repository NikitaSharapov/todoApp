import React from 'react';
import { NavButton, WhiteFormButton } from '../../components/general/button';
import {TechDesc, TopDesc} from '../../components/general/desc';
import {TopImage, Image} from '../../components/lending/image';
import {Logo} from '../../components/general/logo';
import {LendTopNav, TopNavContent} from '../../components/lending/nav';
import {LendBigTitle} from '../../components/lending/title';
import {BottomBlock, BottomBlockContent, MainLayout, Opportunities, OpportunitiesContentLeft, OpportunitiesContentRight, TopSection, TopSectionContent} from '../../layout/main';
import {Wrapper} from '../../layout/wrapper';
import {Link} from "react-router-dom";

import TopImg from '../../assets/images/mock.png';
import Prnscr1 from '../../assets/images/Prnscr1.png';
import Prnscr2 from '../../assets/images/Prnscr2.png';
import Prnscr3 from '../../assets/images/Prnscr3.png';
import Prnscr4 from '../../assets/images/Prnscr4.png';
import { Tech } from '../../components/lending/tech';


export const Lending: React.FC = (props) =>{
 return (
    <MainLayout>
      <LendTopNav>
         <Wrapper>
           <TopNavContent>
              <Logo />
              <Link to='/auth'><NavButton title={'Войти'}/></Link>
            </TopNavContent>
         </Wrapper>
      </LendTopNav>
      <TopSection>
         <Wrapper>
            <TopSectionContent>
               <div>
                  <LendBigTitle>
                     Создай свой список задач
                  </LendBigTitle>
                  <TopDesc>
                     Ту-Ду это просто приложение для создания списка задач
                  </TopDesc>
               </div>
               <TopImage src={TopImg} />
            </TopSectionContent>
         </Wrapper>
      </TopSection>
      <Opportunities>
         <Wrapper>
            <OpportunitiesContentLeft>
               <Image src={Prnscr1}></Image>
               <div>
                  <LendBigTitle>
                     Создавай задачи
                  </LendBigTitle>
                  <TopDesc>
                     Планируйте задачи, списки и напоминания при помощи одного простого приложения
                  </TopDesc>
               </div>
            </OpportunitiesContentLeft>
            <OpportunitiesContentRight>
               <div>
                  <LendBigTitle>
                     Редактируй заголовок или описание
                  </LendBigTitle>
                  <TopDesc>
                     Вы можете изменить задачу или описание к ней, в любой момент 
                  </TopDesc>
               </div>
               <Image src={Prnscr2}></Image>
            </OpportunitiesContentRight>
            <OpportunitiesContentLeft>
            <Image src={Prnscr3}></Image>
               <div>
                  <LendBigTitle>
                     Отмечай то, что уже сделали
                  </LendBigTitle>
                  <TopDesc>
                     Выделите задачу если она уже выполнена
                  </TopDesc>
               </div>
            </OpportunitiesContentLeft>
            <OpportunitiesContentRight>
               <div>
                  <LendBigTitle>
                     Удаляй задачи
                  </LendBigTitle>
                  <TopDesc>
                     Удаляйте задачи, если не планируете к ним возвращаться 
                  </TopDesc>
               </div>
               <Image src={Prnscr4}></Image>
            </OpportunitiesContentRight>
         </Wrapper>
      </Opportunities>
      <Tech />
      <BottomBlock>
         <BottomBlockContent>
            <LendBigTitle>
               Создай свой список задач
            </LendBigTitle>
            <Link to='/auth'><WhiteFormButton title={'Попробовать'} /></Link>
         </BottomBlockContent>
      </BottomBlock>
    </MainLayout>
 )
}