import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TodoContextProvider} from'./context/TodoContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <TodoContextProvider>
    <App />
    </TodoContextProvider>

  </React.StrictMode>
);

