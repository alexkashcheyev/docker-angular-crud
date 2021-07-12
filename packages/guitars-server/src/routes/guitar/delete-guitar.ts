import { Request, Response } from 'express';
import { Guitar } from '../../database/model/guitar';

export const deleteGuitar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const guitar = await Guitar.findByPk(id);
    if (guitar) {
        await guitar.destroy();
        res.status(200).send();
    } else {
        res.status(404).send();
    }
}
