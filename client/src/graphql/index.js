import { WebSocketLink } from 'apollo-link-ws';
import { split, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const TOKEN = 'bpv89pfrh5rf9gg9s1rg';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    credentials: 'include', 
    uri: process.env.SERVICES_URI + '/graphql' 
});

const wsLink = new WebSocketLink({
    uri: `wss://ws.finnhub.io?token=${TOKEN}`,
    options: { 
        reconnect:true,
        connectionParams: {
            // Pass any arguments you want for initialization
        }
    }
})

const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: TOKEN,
      },
    });
    return forward(operation);
  });

const authorizedLink = middlewareLink.concat(wsLink);


const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    authorizedLink,
    httpLink
)

const client = new ApolloClient({
  link: httpLink,
  cache
});

export default client;