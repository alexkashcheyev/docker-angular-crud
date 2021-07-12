import axios from "axios";
import { env } from "process";
import { aGuitarDto, createGuitar, GuitarDto } from "../../guitars-common/dist";

const { SERVER_URL } = env;

export async function createAndGetGuitar(guitar = aGuitarDto({ id: null })) {
    const created = await createGuitar(guitar);
    const createdGuitarUrl = created.headers.location;
    const received = await axios.get(createdGuitarUrl);
    return received.data as GuitarDto;
}