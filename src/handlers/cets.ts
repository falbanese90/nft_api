import { Cet_Store, Cet } from '../models/cets';
import express, { Response, Request } from 'express';

const store = new Cet_Store();

const add = async (req: Request, res: Response) => {
    try {
        const cet: Cet = {
            symbol: String(req.body.symbol),
            floor: Number(req.body.floor),
            listed_count: Number(req.body.listed_count)
        };
        const result = await store.add(cet);
        res.send(result);
    } catch (err) {
        res.send(`${err}`);
    }
};

const index = async (req: Request, res: Response) => {
    try {
        const result = await store.index();
        res.send(result);
    } catch (err) {
        res.send(`${err}`);
    }
};

const cets_routes = (app: express.Application) => {
    app.get('/cets', index);
    app.post('/cets/add', add);
};

export default cets_routes;
