import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TRangeKeys} from "../../utils/Types";
import {getRandInDia} from "../../utils/func";

export type TSettingsState = {
    rnd: number
    count: number
    value: TRangeKeys
    asc: boolean
}
const initialState: TSettingsState = {
    rnd: getRandInDia(0,4),
    count: 5,
    value: '99',
    asc: true
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setCount(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
        setValue(state, action: PayloadAction<TRangeKeys>) {
            state.value = action.payload;
        },
        setAsc(state, action: PayloadAction<boolean>) {
            state.asc = action.payload;
        },
        setRnd(state, action: PayloadAction) {
            state.rnd = getRandInDia(1,5)
        },
    },
});