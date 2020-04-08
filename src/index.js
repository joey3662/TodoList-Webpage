import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import TodoList from './TodoList';//App=> App.js

// PWA Progressive web application using web to create mobile app
// import * as serviceWorker from './serviceWorker';
//JSX =>React
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
