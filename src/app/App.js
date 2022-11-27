import './App.css';
import React from 'react';
import AllRoutes from './AllRoutes';
import Header from '../common/component/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </BrowserRouter>
  );
}

export default App;
