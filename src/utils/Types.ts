import {backgroundImages, range} from "./staticData";

export type TRangeKeys = keyof typeof range

export type TRemArr = Array<string | number>
export type TItem = {
    id: number
    value: number | string
    numValue: number
    icon: string
    rnd: number
}

export type TItems = Array<TItem>

export type TBGImages = typeof backgroundImages[number]