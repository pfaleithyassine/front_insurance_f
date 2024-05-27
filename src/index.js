import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store';
import { ToastContainer } from "react-toastify";
import './_mockApis';
import './utils/i18n';
import Router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
       
      <Router/>
       <ToastContainer />

  </Provider>,
);
