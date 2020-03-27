import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

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

export default client;