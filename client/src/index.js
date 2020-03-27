import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    credentials: 'include', 
    uri: process.env.SERVICES_URI + '/graphql' 
});

// const wsLink = new WebSocketLink({
//     uri: "wss://socket.polygon.io/stocks",
//     options: { 
//         reconnect:true
//     }
// })

// const link = split(
//     ({ query }) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     wsLink,
//     httpLink
// )

const client = new ApolloClient({
  link: httpLink,
  cache
});

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


render(<ApolloProvider client={client}>
        <GlobalStyle />
        <App/>
    </ApolloProvider>, document.getElementById('app'));