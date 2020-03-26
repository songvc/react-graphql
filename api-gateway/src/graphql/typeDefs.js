import { gql } from 'apollo-server';

const typeDefs = gql`
    type Stock {
        description: String!
        id: ID!
        title: String!
    }

    type User {
        email: String!
        id: ID!
    }
    
    type Query {
        stocks: [Stock!]!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`;

export default typeDefs;
