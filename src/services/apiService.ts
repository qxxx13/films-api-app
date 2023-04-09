import axios, { AxiosResponse } from "axios";

import { BestFilmsModel } from "../models/BestFilmsModel";
import { FilmsItemModel } from "../models/FilmsItemModel";
import { FilmsModel } from "../models/FilmsModel";
import { FiltersModel } from "../models/FiltersModel";

const axiosInstance = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/",
    timeout: 10000,
    headers: {
        "X-API-KEY": "23271c7c-c325-49b1-9827-8ce970583d5d",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

export const fetchFilmsByGenresFromApi = (
    pageId: number,
    filters: FiltersModel
): Promise<AxiosResponse<FilmsModel>> => {
    const filmsByGenres = axiosInstance
        .get(
            `v2.2/films?order=${filters.order}&type=${filters.type}&ratingFrom=${filters.ratingFrom}&ratingTo=${filters.ratingTo}&keyword=${filters.keyWords}&page=${pageId}`
        )
        .then((res) => res.data);
    return filmsByGenres;
};

export const fetchBestFilmsFromApi = (pageId: number): Promise<AxiosResponse<BestFilmsModel>> => {
    const bestFilms = axiosInstance
        .get(`v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`)
        .then((res) => res.data);
    return bestFilms;
};

export const fetchFilmById = (filmId: string): Promise<AxiosResponse<FilmsItemModel>> => {
    const filmById = axiosInstance.get(`v2.2/films/${filmId}`).then((res) => res.data);
    return filmById;
};
