import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Images from './Images';

render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />} />

      <Route path='users' element={<Users />} />

      <Route path='images' element={<Images />} />

    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);