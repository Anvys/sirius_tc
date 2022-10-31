//not even my final form
import React, {useEffect} from 'react'
import styled from "@emotion/styled";
import {getBackGround} from "../../utils/getIcon";
import {useRouter} from "next/router";
import {getAudio} from "../../utils/getAudio";
import AscDesc from "../AscDesc/AscDesc";

const StyledFinalForm = styled.a`
  background: url(${getBackGround('final')}) center / contain no-repeat;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

type TProps = {}
export const FinalForm: React.FC<TProps> = (props) => {
    const {...rest} = props
    const router = useRouter()
    const onClick: React.MouseEventHandler = e => {
        e.preventDefault()
        router.push('/settings')
    }
    useEffect(() => {
        const playWinGameSound = getAudio.win
        // playWinGameSound.play()
        console.log(playWinGameSound)
    }, [])
    return (
        <StyledFinalForm {...rest} href={'/settings'} onClick={onClick}/>
    )
}
FinalForm.displayName = 'FinalForm'
export default FinalForm