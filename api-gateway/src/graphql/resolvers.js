import * as Query from './Query/Query';
import * as Mutation from './Mutation/Mutation';
import UserSession from './UserSession';

const resolvers = { Mutation, Query, UserSession };

export default resolvers;