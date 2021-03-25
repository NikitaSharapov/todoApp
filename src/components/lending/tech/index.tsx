import React, { useState } from 'react';
import styled from 'styled-components';
import { TechImageBlock, TechTextBlock } from '../../../layout/main';
import {Image, TechImage} from '../../../components/lending/image';

import Tech1 from '../../../assets/images/Tech1.png';
import Tech2 from '../../../assets/images/Tech2.png';
import Tech3 from '../../../assets/images/Tech3.png';
import Tech4 from '../../../assets/images/Tech4.png';
import Tech5 from '../../../assets/images/Tech5.png';
import Tech6 from '../../../assets/images/Tech6.png';
import Tech7 from '../../../assets/images/Tech7.png';
import Tech8 from '../../../assets/images/Tech8.png';
import { TechDesc } from '../../general/desc';

interface ITech {

}
const items = [
  {
    desc: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.',
  },
  {
    desc: 'Express.js, или просто Express, фреймворк web-приложений для Node.js, реализованный как свободное и открытое программное обеспечение под лицензией MIT. Минималистичный и гибкий веб-фреймворк для приложений Node.js, предоставляющий обширный набор функций для мобильных и веб-приложений. Является стандартным каркасом для Node.js.',
  },
  {
    desc: 'Mongo DB - документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.',
  },
  {
    desc: 'JWT это открытый стандарт для создания токенов доступа, основанный на формате JSON. Как правило, используется для передачи данных для аутентификации в клиент-серверных приложениях.',
  },
  {
    desc: 'Passport - это промежуточное ПО для аутентификации для Node.js. Чрезвычайно гибкий и модульный, Passport можно незаметно добавить в любое веб-приложение на основе Express. Исчерпывающий набор стратегий поддерживает аутентификацию с использованием имени пользователя и пароля, Facebook, Twitter и др.',
  },
  {
    desc: 'Redux - библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.',
  },
  {
    desc: 'Redux-sagas это библиотека, которая призвана упростить и улучшить побочные эффекты (т.е. такие действия, как асинхронные операции, например, загрузки данных, и "грязные" действия, такие, как доступ к браузерному кешу), сделать лёгкими в тестировании и лучше справляться с ошибками.',
  },
  {
    desc: 'Node js это программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel, low.js и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.',
  },
];

export const Tech: React.FC<ITech > = (props) => {
  const [state, setstate] = useState(items[0].desc);
  const clickHandler = (index: number) => {
    setstate(items[index].desc);
  }
  return (
    <>
      <TechImageBlock>
        <TechImage src={Tech1} onClick={()=>clickHandler(0)} />
        <TechImage src={Tech2} onClick={()=>clickHandler(1)} />
        <TechImage src={Tech3} onClick={()=>clickHandler(2)} />
        <TechImage src={Tech4} onClick={()=>clickHandler(3)} />
        <TechImage src={Tech5} onClick={()=>clickHandler(4)} />
        <TechImage src={Tech6} onClick={()=>clickHandler(5)} />
        <TechImage src={Tech7} onClick={()=>clickHandler(6)} />
        <TechImage src={Tech8} onClick={()=>clickHandler(7)} />
      </TechImageBlock>
      <TechTextBlock>
        <TechDesc>
          {state}
        </TechDesc>
      </TechTextBlock>
    </>
  );
}