import { configureStore } from "@reduxjs/toolkit";
import slider from "./reducers/slider";

export const Store = configureStore({
    reducer: {
        weatherApi: slider
    }
});


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
