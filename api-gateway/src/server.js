import "@babel/polyfill";

import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import formatGraphQLErrors from './formatGraphQLError';

const PORT = 7000;

const apolloServer = new ApolloServer({
    context: a => a,
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs
});

const app = express();

app.use(cookieParser());

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql"});
app.listen(PORT, "0.0.0.0", () => {
    console.info(`api gate listening on ${PORT}`)
})