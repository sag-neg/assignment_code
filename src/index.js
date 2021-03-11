import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainNav from './layouts/main-nav/MainNav';


ReactDOM.render(
  <BrowserRouter>
    <MainNav />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
