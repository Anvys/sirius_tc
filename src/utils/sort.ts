import {TItem} from "./Types";

export const sortItemsAsc = (a: TItem, b: TItem) =>{
    return (typeof a.value === 'string' || typeof b.value === 'string')
        ? (a.value as string).charCodeAt(0) - (b.value as string).charCodeAt(0)
        : a.value-b.value
}
export const sortItemsDesc = (a: TItem, b: TItem) =>{
    return (typeof a.value === 'string' || typeof b.value === 'string')
        ? (b.value as string).charCodeAt(0) - (a.value as string).charCodeAt(0)
        : b.value-a.value
}