import { deleteGuitar } from "../../guitars-common";
import { createAndGetGuitar } from "./util";

describe('DELETE /guitar', () => {
    it('should return status 200 on deletion', async () => {
        const guitar = await createAndGetGuitar();
        const res = await deleteGuitar(guitar.id as string);
        expect(res.status).toEqual(200);
    })
});