import { WebSocketLink } from 'apollo-link-ws';
import { split, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const TOKEN = 'bpvblknrh5rf9gg9so5g';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    credentials: 'include', 
    uri: process.env.SERVICES_URI + '/graphql' 
});

// wss://ws.finnhub.io?token=bpvblknrh5rf9gg9so5g

const wsLink = new WebSocketLink({
    uri: `wss://ws.finnhub.io?token=${TOKEN}`,
    options: { 
        // reconnect:true,
        connectionParams: {
            authToken: TOKEN
            // Pass any arguments you want for initialization
        }
    }
})


// const middlewareLink = new ApolloLink((operation, forward) => {
//     console.log('oepration', operation);
//     operation.setContext({
//       headers: {
//         'authorization': TOKEN,
//         'Sec-WebSocket-Protocol': null
//       },
//     });
//     return forward(operation);
//   });



// wsLink.subscriptionClient;

// const authorizedLink = middlewareLink.concat(wsLink);
// console.log('authorized link', authorizedLink);

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
  link: link,
  cache
});

export default client;