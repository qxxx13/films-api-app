import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { createRootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const reducer = createRootReducer();
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false
        }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
