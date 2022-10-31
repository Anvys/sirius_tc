import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {settingsSlice} from "./Slice/settingsSlice";
import {useDispatch} from "react-redux";

const makeStore = () =>
    configureStore({
        reducer: {
            settings: settingsSlice.reducer
        },
        devTools: true,
    });
export const store = makeStore()
export type TAppState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TAppDispatch>()
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
    >;

export const wrapper = createWrapper<AppStore>(makeStore);