// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProfileProvider } from './context/UserProfileContext'; // Ensure correct import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <UserProfileProvider> {/* Wrap the Router and App in the Provider */}
        <App />
      </UserProfileProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals(); // Optional, depending on usage
