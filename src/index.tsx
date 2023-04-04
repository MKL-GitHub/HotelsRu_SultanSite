import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import "./nulling-styles.css";
import "./fonts/Inter/stylesheet.css";
import "./index.scss";
import "./styles/button.scss";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
