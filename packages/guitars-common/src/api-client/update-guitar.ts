import axios from "axios";
import { env } from "process"
import { GuitarDto } from "../dto";
import { getServerUrl } from "./consts";
// import { SERVER_URL } from "./consts";


export const updateGuitar = (id: string, guitar: GuitarDto) => {
    const SERVER_URL = getServerUrl();
    return axios.put(`${SERVER_URL}/guitars/${id}`, guitar);
}