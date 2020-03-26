import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import accessEnv from '../helpers/index';
import setupRoutes from './routes.js';
import '@babel/polyfill';

const app = express();
const PORT = 7100;


app.use(bodyParser.json());
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
    console.info(`stock services listening on ${PORT}`);
});
