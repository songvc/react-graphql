import UsersService from './Adapters/UsersService';

const UserSession = {
    user: async userSession => {
        console.log('userSEssion', userSession);
        return await UsersService.fetchUser({ userId: userSession.userId })
    }
}

export default UserSession; 