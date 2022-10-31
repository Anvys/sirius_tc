const getStrBG = (bg: string, img1: string | number, w1:number, h1:number, img2: string | number, w2:number, h2:number,) => `
                background: ${bg};
                  &::before{
                    content: '';
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: calc(100% * ${w1} / 980);
                    height: calc(100% * ${h1} / 810);
                    background: url(${require(`./../assets/img/bg/${img1}.png`).default.src}) top left / contain no-repeat;
                  }
                  &::after{
                    content: '';
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: calc(100% * ${w2} / 980);
                    height: calc(100% * ${h2} / 810);
                    background: url(${require(`./../assets/img/bg/${img2}.png`).default.src}) top right / contain no-repeat;
                  }
                `
export const getPlayGroundBG = (num: number) => {
    switch (num) {
        // case 1:
        //     return getStrBG(`#DEC6AA`, 10, 422,536, 11, 219,421)
        // case 2:
        //     return getStrBG(`#3A1F36`, 21, 225,542, 22, 174,411)
        case 1:
            return `background: url(${require(`./../assets/img/bg/1.png`).default.src}) center / cover no-repeat;`
        case 2:
            return `background: url(${require(`./../assets/img/bg/2.png`).default.src}) center / cover no-repeat;`
        case 3:
            return `background: url(${require(`./../assets/img/bg/3.png`).default.src}) center / cover no-repeat;`
        case 4:
            return `background: url(${require(`./../assets/img/bg/4.png`).default.src}) center / cover no-repeat;`

    }
}