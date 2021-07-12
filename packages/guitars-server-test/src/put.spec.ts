import { aGuitarDto, deleteGuitar, getGuitar, GuitarDto, updateGuitar } from 'guitars-common';
import { createAndGetGuitar } from "./util";

describe('PUT /guitar', () => {
    it('should update saved guitar', async () => {
        const guitar = await createAndGetGuitar();
        const updatedGuitar = aGuitarDto({ id: guitar.id });
        await updateGuitar(guitar.id as string, updatedGuitar);
        const freshGuitar = await getGuitar(guitar.id as string);

        expect(
            freshGuitar.data as GuitarDto
        ).toEqual(
            expect.objectContaining(updatedGuitar)
        )
    });

    it('should return 404 on unexisting guitar', async () => {
        const guitar = await createAndGetGuitar();
        const updatedGuitar = aGuitarDto({ id: guitar.id });

        await deleteGuitar(guitar.id as string);

        await updateGuitar(
            guitar.id as string, updatedGuitar
        ).catch(
            (err) => expect(err.message).toMatch(/404/)
        );
    })
});