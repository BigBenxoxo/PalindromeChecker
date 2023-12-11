// Import the React library and the createRoot function from ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import the main component App from './App.js'
import App from './App.js';

// Get the DOM element with the id 'root'
const root = document.getElementById('root');

// Use the createRoot function to create a root element for rendering
const rootElement = createRoot(root);

// Render the main App component inside a React.StrictMode
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
