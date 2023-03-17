/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { createRootReducer } from "./rootReducer";

const reducer = createRootReducer();

export const store = configureStore({
    reducer: reducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
