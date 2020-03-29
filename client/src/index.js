import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import graphql from './graphql';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, #app {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    body {
        font-family: monospace;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
        width: 100%;
        height: 100%;
    }
`

console.log('s', store);


render(<Provider store={store}>
        <ApolloProvider client={graphql}>
            <GlobalStyle />
            <App/>
        </ApolloProvider>
    </Provider>, 
    document.getElementById('app'));