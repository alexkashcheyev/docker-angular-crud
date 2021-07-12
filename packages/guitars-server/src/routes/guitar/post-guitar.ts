import { Request, Response } from 'express'
import { GuitarDto } from 'guitars-common'
import { env } from 'process';
import { Guitar } from '../../database/model/guitar';

const { SERVER_URL } = env;

export const postGuitar = async (req: Request, res: Response) => {
    const guitar = req.body as GuitarDto;
    if (guitar.id !== null) {
        res.status(400).send();
    } else {
        const model = await Guitar.create({
            ...guitar,
            id: undefined
        });
        const location = `${SERVER_URL}/guitars/${(model as any).id}`
        res.status(201).header('location', location).send();
    }
}