export const getTargetPlaceBG = (num: number) =>{
    return `background: url(${require(`./../assets/img/targetPlace/${num}.png`).default.src}) border-box center / cover no-repeat;`
}