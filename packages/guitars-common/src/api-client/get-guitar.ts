import axios from "axios"
import { env } from "process"
import { getServerUrl } from "./consts";
// import { SERVER_URL } from "./consts";


export const getGuitar = async (id: string) => {
    const SERVER_URL = getServerUrl();
    return axios.get(`${SERVER_URL}/guitars/${id}`);
}