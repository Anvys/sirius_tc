import {TItems} from "./Types";

export const findPrevNotNull = (arr: TItems, tID: number) => {
    for (let i = tID - 1; i >= 0; i--) {
        if (i < 0) return -1
        if (arr[i].numValue !== 0) return arr[i].numValue
    }
    return 0
    // return Math.max(...arr.map(v=>v.numValue).filter((v,i)=>i<tID))
}

export const findNextNotNull = (arr: TItems, tID: number) => {
    for (let i = tID + 1; i < arr.length; i++) {
        if (arr[i].numValue !== 0) return arr[i].numValue
    }
    return 0
    // return Math.max(...arr.map(v=>v.numValue).filter((v,i)=>i<tID))
}

export const findPrev = (arr: TItems, tID: number) => tID === 0 ? -1 : arr[tID - 1].numValue

export const findNext = (arr: TItems, tID: number) =>  tID === arr.length-1  ? -1 : arr[tID + 1].numValue

export const getMin = (arr: TItems) => {
    return Math.min(...arr.map(v => v.numValue))
}

export const getMax = (arr: TItems) => {
    return Math.max(...arr.map(v => v.numValue))
}