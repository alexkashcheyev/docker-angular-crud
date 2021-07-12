import axios from "axios"
import { env } from "process";
// import { SERVER_URL } from "./consts";
import { getServerUrl } from "./consts";


export const deleteGuitar = async (id: string) => {
    const SERVER_URL = getServerUrl();
    return axios.delete(`${SERVER_URL}/guitars/${id}`);
}