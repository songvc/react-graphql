import UsersService from './graphql/Adapters/UsersService';

const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        const userSession = await UsersService.fetchUserSession({
            sessionId: req.cookies.userSessionId
        })
        res.locals.userSession = userSession;
    }
    return next();
}

export default injectSession;