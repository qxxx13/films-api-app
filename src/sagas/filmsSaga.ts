import { call, put, takeLatest } from "redux-saga/effects";
import { ApiItemModel } from "../models/ApiItemModel";
import { ApiResponseModel } from "../models/ApiResponseModel";
import {
    setFilms,
    setIsLoading,
    setTotal,
    setTotalPages
} from "../store/filmsData/filmsDataReducer";
import { loadFilmById, loadFilms } from "./filmsSagaActions";
import { PayloadAction } from "@reduxjs/toolkit";

export const filmsSaga = [
    takeLatest(loadFilms, fetchFilmsWorker),
    takeLatest(loadFilmById, fetchFilmByIdWorker)
];

const fetchFilmsFromApi = (pageId: number): Promise<ApiItemModel> => {
    const response = fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${pageId}`,
        {
            method: "GET",
            headers: {
                "X-API-KEY": "23271c7c-c325-49b1-9827-8ce970583d5d",
                "Content-Type": "application/json"
            }
        }
    ).then((res) => res.json());

    return response;
};

function* fetchFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));

        const data = (yield call(
            fetchFilmsFromApi,
            action.payload
        )) as ApiResponseModel;

        yield put(setTotal(data.total));
        yield put(setTotalPages(data.totalPages));
        yield put(setFilms(data.items));
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
