import axios, { AxiosResponse } from "axios";

import { BestFilmsModel } from "../models/BestFilmsModel";
import { FilmsByKeyWordsModel } from "../models/FilmsByKeyWordsModel";
import { FilmsItemModel } from "../models/FilmsItemModel";
import { FilmsModel } from "../models/FilmsModel";

const instance = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/",
    timeout: 10000,
    headers: {
        "X-API-KEY": "23271c7c-c325-49b1-9827-8ce970583d5d",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

export const fetchFilmsFromApi = (pageId: number): Promise<AxiosResponse<FilmsModel>> => {
    const response = instance.get(`v2.2/films?page=${pageId}`).then((res) => res.data);
    return response;
};

export const fetchBestFilmsFromApi = (pageId: number): Promise<AxiosResponse<BestFilmsModel>> => {
    const response = instance.get(`v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`).then((res) => res.data);
    return response;
};

export const fetchFilmsByKeyWords = (
    keyWords: string,
    pageId: number
): Promise<AxiosResponse<FilmsByKeyWordsModel>> => {
    const response = instance
        .get(`v2.1/films/search-by-keyword?keyword=${keyWords}&page=${pageId}`)
        .then((res) => res.data);
    return response;
};

export const fetchFilmById = (filmId: string): Promise<AxiosResponse<FilmsItemModel>> => {
    const response = instance.get(`v2.2/films/${filmId}`).then((res) => res.data);
    return response;
};
