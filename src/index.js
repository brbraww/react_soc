import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostsData = [
    {id: 1, text: 'hello', likesCount: 4},
    {id: 2, text: 'lol kek cheburek', likesCount: 51},
]
let DialogsData = [
    {id: 1, name: 'Amidomaru'},
    {id: 2, name: 'Yo'},
    {id: 3, name: 'Riko'},
    {id: 4, name: 'Moon'},
    {id: 5, name: 'Ogurchik'},
]
let MessagesData = [
    {id: 1, text: 'Ya Amidomaru'},
    {id: 2, text: 'Yo Yo'},
    {id: 3, text: 'Ya Riko'},
    {id: 4, text: 'Ya Moon'},
    {id: 5, text: 'Ya Ogurchik'},
]

ReactDOM.render(
  <React.StrictMode>
    <App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
