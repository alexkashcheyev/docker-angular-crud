import axios from 'axios';
import exp from 'constants';
import { aGuitarDto, createGuitar } from 'guitars-common'
import { env } from 'process';

const { SERVER_URL } = env;

describe('POST /guitars', function () {
    it('should return The new guitar`s location', async () => {
        const guitar = aGuitarDto({ id: null });

        const res = await createGuitar(guitar);

        expect(res.status).toEqual(201);
        expect(res.headers.location).toMatch(/\/guitars\/[a-z0-9\-]{36}/)
    });

    it('should return the same guitar with id by returned link', async () => {
        const guitar = aGuitarDto({ id: null });

        const created = await createGuitar(guitar);
        const createdGuitarUrl = created.headers.location;
        const received = await axios.get(createdGuitarUrl);

        expect(received.data.manufacturer).toEqual(guitar.manufacturer);
        expect(received.data.modelName).toEqual(guitar.modelName);
        expect(received.data.id).toBeTruthy();
    });

    it('should return status 400 if id was included in the request', async () => {
        const guitar = aGuitarDto({});

        await createGuitar(guitar).catch((err) => {
            console.error(JSON.stringify(err));
            expect(err.message).toMatch(/400/)
        });
    })
});
