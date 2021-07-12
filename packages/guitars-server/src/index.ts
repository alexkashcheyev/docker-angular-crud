import express from 'express';
import { env } from 'process';
import { configureDatabase } from './database/configure-database';
import { configureMiddleware } from './middleware/configure-middleware';
import { configureRoutes } from './routes/configure-routes';

const { SERVER_PORT } = env;

const app = express();

configureMiddleware(app);
configureRoutes(app);

Promise.all([
    configureDatabase()
]).then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`Server started on port ${SERVER_PORT}`)
    })
}).catch((err) => {
    console.error('Could not connect to database', JSON.stringify(err));
})
