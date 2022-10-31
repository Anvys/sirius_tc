import React from 'react'
import styled from "@emotion/styled";

const StyledSettingButton = styled.button<{bType: 'set' | 'game', active: boolean}>`
  font-family: Calibri, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: ${props=> props.bType === 'set' ? '0 5px' : '5px 25px'};

  color: ${props=>props.bType === 'set' ? `${props.active ? '#423F45' : 'rgba(66, 63, 69, 0.56)'}` : `#ffffff`};
  background: ${props=>props.bType === 'set' ? `${props.active ? '#FFD748' : 'rgba(255, 215, 72, 0.56)'}` : `#38DF7A`};
  &:hover{
    cursor: pointer;
  }
`

type TProps = {
    text:string | React.ReactNode
    onClick: () => void
    bType: 'set' | 'game'
    active: boolean
    children?: React.ReactNode
}
export const SettingButton:React.FC<TProps> = (props) => {
    const {text, ...rest} = props
    return (
        <StyledSettingButton {...rest}>{text}</StyledSettingButton>
    )
}