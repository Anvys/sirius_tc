import {range} from "./staticData";
import {getIcon} from "./getIcon";
import {sortItemsAsc} from "./sort";
import {TItems, TRangeKeys, TRemArr} from "./Types";


export const getRandInDia = (a: number, b: number) => {
    return Math.ceil(Math.random() * (b - a) + a)
}
const getValInRange = (r: TRangeKeys) => {
    const val = getRandInDia(range[r][0], range[r][1])
    return r === 'A' ? String.fromCharCode(val) : val
}
export const getInitArray = (r: TRangeKeys, count: number): TRemArr => {
    if (range[r][1] - range[r][0] < count) throw new Error('ITEM COUNT MUST BE LESS THEN RANGE')
    const res2: TRemArr = []
    for (let i = 0; i < count; i++) {
        let value = getValInRange(r)
        while (res2.includes(value)) {
            console.log(`REROLL`)
            value = getValInRange(r)
        }
        res2.push(value)
    }
    return res2
}
export const getInitObjArray = (r: TRangeKeys, count: number, rnd: number): TItems => {
    return getInitArray(r, count).map((v, i) => ({
        id: i,
        value: v,
        numValue: typeof v === "number" ? v : v.charCodeAt(0),
        icon: getIcon(rnd, i),
        rnd: rnd,
    }))
}

export const getTargetObjArray = (rem: TItems, asc: boolean) => {
    const res: TItems = rem.map((v, i) => ({
        id: i,
        value: 0,
        numValue: 0,
        icon: '',
        rnd: v.rnd
    }))
    const sortedRem = [...rem].sort(sortItemsAsc)
    if (asc) {
        res[0] = {
            ...sortedRem[0],
            id: res[0].id
        }
    } else {
        res[rem.length - 1] = {
            ...sortedRem[rem.length - 1],
            id: res[rem.length - 1].id
        }
    }
    return res
}