import React from 'react';
import { render } from 'react-dom';
import { createGlobalSTyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
    html, body, #app {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    body {
        font-family: monospace;
    }
`


render(<><GlobalStyle>
        <App/>
    </GlobalStyle></>, document.getElementById('app'));