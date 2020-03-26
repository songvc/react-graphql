import UsersService from '../Adapters/UsersService';

const createUserResolver = async (obj, { email, password }) => {
    return await UsersService.createUser({ email, password });
}

export default createUserResolver;