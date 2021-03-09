import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

import '../src/assets/fonts/font.css';
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: IBMPlexSans-Regular;
}
a{
  color: inherit;
  text-decoration: none;
}
body{
  margin: 0 auto;
  width: 1440px;
  background: #F7F6F6;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
