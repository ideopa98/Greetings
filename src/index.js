import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate= new Date();
curDate= curDate.getHours();
let greeting="";
const cssStyle= {};
if( curDate>=0  && curDate<12){
greeting=" Good Morning";
cssStyle.color= "green";
}else if(curDate>=12 && curDate<19){
  greeting="Good Afternoon";
  cssStyle.color= "Yellow";
} else{
  greeting="Good Night";
  cssStyle.color= "Blue";
}

ReactDOM.render(
  <div>
  <h1>
    Hello Sir, <span style={cssStyle}>{greeting}</span> 
  </h1>
  </div>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
   