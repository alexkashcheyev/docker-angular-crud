import { deleteGuitar, getGuitar, GuitarDto, listGuitars } from 'guitars-common';
import { createAndGetGuitar } from "./util";

describe('GET /guitars', () => {
    it('should return an existing guitar', async () => {
        const guitar = await createAndGetGuitar();

        const res = await getGuitar(guitar.id as string);

        expect(res.data as GuitarDto).toEqual(guitar);
    });

    it('should return 404 on deleted guitar', async () => {
        const guitar = await createAndGetGuitar();
        await deleteGuitar(guitar.id!);

        await getGuitar(guitar.id!).catch((err) => expect(err.message).toMatch(/404/));
    });

    it('should return a list of guitars', async () => {
        const response = await listGuitars();

        expect(response.data.length).toBeGreaterThan(0);
    });
});