import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // провайдер который используем конкретный store для управления состояниями.  store это хаб для хранения и запуска слайсов
  <Provider store={store}>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

