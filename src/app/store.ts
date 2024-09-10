import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        filter: filtersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});
