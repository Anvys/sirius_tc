import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled";

const StyledRangeInput = styled.div<{count: number}>`
  color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props=> props.count>5? `350px`: `fit-content`};
  font-family: Calibri,serif;
  font-weight: 700;
  & label {
    font-size: 28px;
  }
`

const StyledRangeTips = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`
const StyledInput = styled.input`
  -webkit-appearance: none;
  width: 95%;
  background: #FFD748;
  border-radius: 10px;
  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    background: #104987;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  &:hover{
    cursor: pointer;
  }
`

type TProps = {
    text: string
    values: Array<string | number>
    onChange: (range: string | number) => void
    initVal: string | number
}
export const RangeInput: React.FC<TProps> = (props) => {
    const {text,onChange, values, ...rest} = props
    const [range, setRange] = useState(()=> values.findIndex(v=>v===props.initVal))

    useEffect(()=>{
        onChange(values[range])
    },[range])
    return (
        <StyledRangeInput {...rest} count={values.length}>
            <label>{`${text}`}</label>
            <StyledRangeTips>{values.map(v => <div style={{minWidth:`20px`}}>{v}</div>)}</StyledRangeTips>
            <StyledInput type={'range'} min={0} max={values.length - 1} value={range}
                         onChange={e => setRange(+e.target.value)} />
        </StyledRangeInput>
    )
}