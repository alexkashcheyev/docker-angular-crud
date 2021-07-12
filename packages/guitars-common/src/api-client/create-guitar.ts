import axios from "axios";
import { env } from "process";
import { GuitarDto } from "../dto";
import { getServerUrl } from "./consts";



export const createGuitar = async (guitar: GuitarDto) => {
    const SERVER_URL = await getServerUrl();
    return axios.post(`${SERVER_URL}/guitars/`, guitar);
}