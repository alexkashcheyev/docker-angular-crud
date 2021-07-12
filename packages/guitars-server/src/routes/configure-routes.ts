import { Express } from 'express';
import { postGuitar, getGuitar, deleteGuitar, putGuitar, getGuitars } from './guitar';

export function configureRoutes(app: Express) {
    app.post('/guitars/', postGuitar);
    app.get('/guitars/', getGuitars)
    app.get('/guitars/:id', getGuitar)
    app.delete('/guitars/:id', deleteGuitar)
    app.put('/guitars/:id', putGuitar)
}