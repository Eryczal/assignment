import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action, Filter } from "./types";

const initialState: Filter = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const filtersSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state: Filter, action: PayloadAction<Action>) => {
            const { type, text } = action.payload;
            state[type] = text;
        },
        clearFilters: () => {
            return initialState;
        },
    },
});

export const { setFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
