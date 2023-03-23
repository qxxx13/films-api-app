import { createAction } from "@reduxjs/toolkit";
import * as ActionType from "./filmsSagaActionsType";

export const loadFilms = createAction<number>(ActionType.LoadFilmsActionType);
export const loadFilmById = createAction(ActionType.LoadFilmByIdActionType);
