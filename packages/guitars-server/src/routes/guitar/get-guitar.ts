import { Request, Response } from 'express';
import { Guitar } from '../../database/model/guitar';

export const getGuitar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const guitar = await Guitar.findByPk(id);
    if (guitar) {
        res.send(guitar.toJSON());
    } else {
        res.status(404).send();
    }
}