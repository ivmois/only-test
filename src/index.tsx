import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const element = document.getElementById('root') as HTMLElement;

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
}
