import React from 'react'
import styled from "@emotion/styled";
import {getAscDescBG} from "../../utils/getAscBg";

const StyledAscDesc = styled.div<TProps>`
  width: calc(100% * 358 / 980);
  height: calc(100% * 69 / 980);
  min-height: 50px;
  align-self: ${props=>props.asc?`flex-start`: `flex-end`};
  ${props=>getAscDescBG(props.asc)}
`

type TProps = {
    asc: boolean
}
export const AscDesc:React.FC<TProps> = (props) => {
    const {...rest} = props
    return (
        <StyledAscDesc {...rest}/>
    )
}