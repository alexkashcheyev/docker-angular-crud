import { Chance } from 'chance';

const random = new Chance();

export interface GuitarDto {
    id: string | null;
    modelName: string;
    manufacturer: string;
    originCountry: string;
    year: number;
}

export function aGuitarDto({
    id = random.guid(),
    modelName = random.word(),
    manufacturer = random.company(),
    originCountry = random.country(),
    year = random.integer({ min: 1900, max: 2020 })
}: Partial<GuitarDto>): GuitarDto {
    return {
        id,
        modelName,
        manufacturer,
        originCountry,
        year
    }
}
