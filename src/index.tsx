import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';

import { themeOptions } from './common/Theme/ThemeOptions';
import { store } from './store/rootStore';
import { App } from './App';

import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={themeOptions}>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);
