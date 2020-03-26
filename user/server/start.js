import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import setupRoutes from './routes.js';
import '@babel/polyfill';

const app = express();
const PORT = 7101;


app.use(bodyParser.json());
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

setupRoutes(app);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    })
})

app.listen(PORT, "0.0.0.0", () => {
    console.info(`user services listening on ${PORT}`);
});
