import axios from "axios";
import { GuitarDto } from ".";

export class ApiClient {
    constructor(private serverUrl: string) { };

    createGuitar = async (guitar: GuitarDto) => axios.post(`${this.serverUrl}/guitars/`, guitar);

    deleteGuitar = async (id: string) => axios.delete(`${this.serverUrl}/guitars/${id}`);

    getGuitar = async (id: string) => axios.get(`${this.serverUrl}/guitars/${id}`);

    listGuitars = async (offset?: number) => axios.get(`${this.serverUrl}/guitars/?offset=${offset ?? 0}`);

    updateGuitar = async (id: string, guitar: GuitarDto) => axios.put(`${this.serverUrl}/guitars/${id}`, guitar);

}