import axios from "axios";

const api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
    mode: "no-cors"
})

export const  localApi = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
    mode: "no-cors"
})

export default api;
