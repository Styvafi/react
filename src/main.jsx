import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
