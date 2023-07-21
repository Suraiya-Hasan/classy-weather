import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppFC from './AppFC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <AppFC />
  </React.StrictMode>
);

