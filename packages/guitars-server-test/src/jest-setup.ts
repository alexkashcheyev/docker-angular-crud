import { aGuitarDto, createGuitar } from "../../guitars-common/dist"

export default async () => {
    for (let i = 0; i < 30; i++) {
        await createGuitar(aGuitarDto({ id: null }));
    }
}