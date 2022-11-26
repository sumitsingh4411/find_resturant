import './App.css';
import React from 'react';
import AllRoutes from './AllRoutes';
import Header from '../common/component/header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
