export const getAscDescBG = (asc: boolean) =>{
    return `background: url(${require(`./../assets/img/asc/${asc ? `asc`: 'desc'}.png`).default.src}) border-box center / contain no-repeat;`
}