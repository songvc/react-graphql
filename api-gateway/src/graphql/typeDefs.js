import { gql } from 'apollo-server';

const typeDefs = gql`
    scalar Date 

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
        userSession(me: Boolean!) : UserSession
    }

    type UserSession {
        createdAt: Date!
        expiredAt: Date!
        id: ID!
        user: User!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
        createUserSession(email: String!, password: String!): UserSession!
    }

`;

export default typeDefs;
