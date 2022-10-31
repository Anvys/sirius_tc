import {TBGImages} from "./Types";
import {getRandInDia} from "./func";

export const getIcon = (id: number, pos: number) =>{
    if(id>4)id=4
    const rv = getRandInDia(1,5)
    return require(`../assets/img/item/${id}/${id===4?pos+1>5?5:pos+1 : rv}.png`).default.src || ''
}
export const getBackGround = (bg: TBGImages) =>{
    console.log(require(`./../assets/img/bg/${bg}.png`).default.src, require(`./../assets/img/bg/${bg}.png`))
    return require(`./../assets/img/bg/${bg}.png`).default.src || ''
}