import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Component/Test';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('nyoba')
);

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('Navbar1')
);


ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('Footer')
);

reportWebVitals();
  