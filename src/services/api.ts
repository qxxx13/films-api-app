import axios from "axios";

export const instance = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/",
    timeout: 10000,
    headers: {
        "X-API-KEY": "23271c7c-c325-49b1-9827-8ce970583d5d",
        "Content-Type": "application/json"
    }
});
