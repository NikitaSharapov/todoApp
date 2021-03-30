import React from 'react';
import styled from 'styled-components';
import { media } from '../../..'; 
import { GreyButton } from '../../general/button';
import { VoiceInfoDesc } from '../../general/desc';
import { ErrorTitle, FormTitle, VoiceInfoBigitle, VoiceInfoTitle } from '../../general/title';

const ModalVoiceInfoContent = styled.form`
  display:grid;
  align-items: center;
  width: 480px;
  justify-self: center;
  @media ${props =>media.desktop550}{
    width:100%;
  } 
`

const ModalVoiceInfoContainer = styled.div`
  display:grid;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  -moz-box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
  box-shadow: 1px 3px 13px -6px rgba(0,0,0,0.65);
`

interface IModalVoiceInfo {
  close: ()=>void;
  
}

export const ModalVoiceInfo: React.FC<IModalVoiceInfo> = (props) =>{

  return (
    <ModalVoiceInfoContent >
      <ModalVoiceInfoContainer >
        <VoiceInfoBigitle>Голосовое управление</VoiceInfoBigitle>
        <VoiceInfoDesc>
          Для того чтобы повилась возможность голосового управления нужно в настройках разрешить приложению использовать микрофон.
        </VoiceInfoDesc>
        <VoiceInfoDesc>
          О том что микрофон работает должен сигнализировать специальный индикатор.
        </VoiceInfoDesc>
        <VoiceInfoTitle>Список голосовых команд:</VoiceInfoTitle>
        <VoiceInfoTitle>*Создать задачу* - [текст задачи]</VoiceInfoTitle>
        <VoiceInfoTitle>*Отметить задачу* - [заголовок задачи]</VoiceInfoTitle>
        <VoiceInfoTitle>*Удалить задачу* - [заголовок задачи]</VoiceInfoTitle>
        <GreyButton value={'Подтвердить'} type={'button'} onClick={()=>props.close()}/>
      </ModalVoiceInfoContainer>
    </ModalVoiceInfoContent>
  )
}