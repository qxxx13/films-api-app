import { call, put, takeLatest } from "redux-saga/effects";
import { FilmsModel } from "../models/FilmsModel";
import { setFilmsData, setIsLoading } from "../store/filmsData/filmsDataReducer";
import { loadBestFilms, loadFilmById, loadFilms } from "./filmsSagaActions";
import { PayloadAction } from "@reduxjs/toolkit";
import { instance } from "./../services/api";
import { AxiosResponse } from "axios";
import { BestFilmsModel } from "../models/BestFilmsModel";
import { setBestFilms, setBestFilmsPagesCount } from "../store/bestFilmsData/bestFilmsDataReducer";

export const filmsSaga = [
    takeLatest(loadFilms, fetchFilmsWorker),
    takeLatest(loadFilmById, fetchFilmByIdWorker),
    takeLatest(loadBestFilms, fetchBestFilmsWorker)
];

const fetchFilmsFromApi = (pageId: number): Promise<AxiosResponse<FilmsModel>> => {
    const response = instance.get(`v2.2/films?page=${pageId}`).then((res) => res.data);
    return response;
};

const fetchBestFilmsFromApi = (pageId: number): Promise<AxiosResponse<BestFilmsModel>> => {
    const response = instance.get(`v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`).then((res) => res.data);
    return response;
};

function* fetchFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchFilmsFromApi, action.payload)) as FilmsModel;
        yield put(setFilmsData(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* fetchBestFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchBestFilmsFromApi, action.payload)) as BestFilmsModel;
        yield put(setBestFilmsPagesCount(data.pagesCount));
        yield put(setBestFilms(data.films));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* fetchFilmByIdWorker(): Generator {
    try {
        yield put(setIsLoading(true));
    } catch (error) {
        console.log(error);
    }
}
