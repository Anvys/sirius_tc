import {AppState} from "../store";

export const SettingSelectors = {
    getCount: (state: AppState) => state.settings.count,
    getValue: (state: AppState) => state.settings.value,
    getAsc: (state: AppState) => state.settings.asc,
    getRnd: (state: AppState) => state.settings.rnd,
}