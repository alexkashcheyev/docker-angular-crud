import { Request, Response } from 'express';
import { GuitarDto } from 'guitars-common';
import { Guitar } from '../../database/model/guitar';

export const putGuitar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedGuitar: GuitarDto = {
        ...(req.body as GuitarDto),
        id
    };
    const guitar = await Guitar.findByPk(id);
    if (guitar) {
        Object.entries(updatedGuitar).forEach(([key, value]) => {
            (guitar as any)[key] = value;
        });
        await guitar.save();
        res.send(guitar);
    } else {
        res.status(404).send();
    }
}