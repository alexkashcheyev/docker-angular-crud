import { Request, Response } from "express"
import { Guitar } from "../../database/model/guitar";

const LIMIT = 3;

export const getGuitars = async (req: Request, res: Response) => {
    const offset = parseInt(req.query.offset as string) || 0;

    const list = await Guitar.findAll({ limit: LIMIT, offset });

    res.send(list);
}