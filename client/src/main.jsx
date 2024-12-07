import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
        </Router>
    
    </React.StrictMode>
  </Provider>
);
