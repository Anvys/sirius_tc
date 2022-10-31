import React, {memo} from 'react'
import styled from "@emotion/styled";
import {getTargetPlaceBG} from "../../utils/getTargetPlaceBG";
import TargetItem from "../TargetItem/TargetItem";

const StyledTargetPlace = styled.div<{ rnd: number }>`
  box-sizing: border-box;
  position: relative;
  width: fit-content;
  border-radius: 20px;
  ${props => getTargetPlaceBG(props.rnd)}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px 25px;
`

type TProps = {
    children: React.ReactNode
    rnd: number
}
export const TargetPlace: React.FC<TProps> = memo((props) => {
    const {children, ...rest} = props
    return (
        <StyledTargetPlace {...rest}>{children}</StyledTargetPlace>
    )
})
TargetPlace.displayName = 'TargetPlace'
export default TargetPlace