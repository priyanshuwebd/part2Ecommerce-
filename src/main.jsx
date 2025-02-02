// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use ReactDOM client for React 18+
import App from './App';  // Your root component
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
    