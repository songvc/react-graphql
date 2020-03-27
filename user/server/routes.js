import { addHours } from 'date-fns';
import { Users, UserSessions } from '../db/models';
import generateUUID from '../helpers/generateUUID';
import hashPassword from '../helpers/hashPassword';
import bcrypt from 'bcryptjs';

const USER_SESSION_EXPIRARY_HOURS = 1;
const setupRoutes = (app) => {
    app.post('/sessions', async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error('invalid body'));
        }

        try {
            const user = await Users.findOne(
                { 
                    attributes: {}, 
                    where: {
                        email: req.body.email
                    }
                });
            if (!user) return next(new Error('invalid emails!'));

            if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
                return next(new Error('incorrect password'));
            }

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRARY_HOURS);
            const sessionToken = generateUUID();
            const userSession = await UserSessions.create({
                expiresAt,
                id: sessionToken,
                userId: user.id
            });

            return res.json(userSession);
        } catch(e) {
            return next(e);
        }
    })

    app.get("/sessions/:sessionId", async (req, res, next) => {
        try {
            const userSession = await UserSessions.findByPk(req.params.sessionId);
            if (!userSession) return next(new Error('invalid session id'));
            return res.json(userSession);
        } catch (e) {
            return next(e)
        }
    })

    app.post('/users', async (req,res,next) => {
        if (!req.body.email || ! req.body.password) {
            return next(new Error('invalid body'));
        }
        try {
            const newUser = await Users.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            })
            return res.json(newUser);
        } catch(e) {
            return next(e)
        }
    });

    app.get("/users/:userId", async (req, res, next) => {
        try {
            const user = await Users.findByPk(req.params.userId);
            if(!user) return next(new Error('Invalid user id'));
            return res.json(user);
        } catch(e) {
            return next(e);
        }

    })

}

export default setupRoutes;