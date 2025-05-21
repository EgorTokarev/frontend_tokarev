
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/main.css";

import "./assets/styles/normalize.css";
import "./assets/styles/global.css";
import "swiper/swiper-bundle.css";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found!');
}