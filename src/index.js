// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  
  <React.StrictMode>
   
    <Router>
    <App />  
    </Router>
  
  </React.StrictMode>,  
    
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();