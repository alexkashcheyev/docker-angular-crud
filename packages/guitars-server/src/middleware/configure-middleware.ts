import { Express, json } from 'express';
import cors from 'cors';

export function configureMiddleware(app: Express) {
    app.use(cors({
        exposedHeaders: 'location'
    }));
    app.use(json());
}