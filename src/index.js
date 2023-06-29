import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import Test from './Component/Test';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('nyoba')
);

reportWebVitals();
  