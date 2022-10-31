import React, {memo} from 'react'
import styled from "@emotion/styled";
import TargetPlace from "../TargetPlace/TargetPlace";

const StyledText = styled.span`
  font-family: Calibri, serif;
  font-size: 56px;
  line-height: 68px;
  -webkit-text-stroke: 4px #242546;
  font-style: normal;
  font-weight: bolder;
  display: flex;
  color: #FFFFFF;
`

type TProps = {
    text: string | number
}
export const Text: React.FC<TProps> = memo((props) => {
    const {text, ...rest} = props
    return (
        <StyledText {...rest}>{text}</StyledText>
    )
})
Text.displayName = 'Text'
export default Text