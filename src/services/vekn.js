import axios from "axios";
import { URL_GET_ALL_PLAYERS } from "../constants/vekn";

export const getPlayerList = async () => {
    const response = await axios.get(URL_GET_ALL_PLAYERS);
    return response.data;
};
