
const userSessionResolver = async (obj, args, context) => {
    if (args.me !== true) throw new Error('unsupported argument values');
    return context.res.locals.userSession;
}

export default userSessionResolver;

