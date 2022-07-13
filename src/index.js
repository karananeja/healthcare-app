import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DynamicComponent from './DynamicComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DynamicComponent />
  </React.StrictMode>
);
