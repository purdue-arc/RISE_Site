import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Import the App component, not Main or Registration
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App /> {/* Render the App component, not Main or Registration */}
    </React.StrictMode>,
);

reportWebVitals();
