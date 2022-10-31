import React from 'react'
import styled from "@emotion/styled";
import {Text} from "../Text/Text";
import {theme} from "../../utils/theme";
import {TItem} from "../../utils/Types";

const StyledTargetItem = styled.div<TSProps>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.item.icon === '' ? `${theme.background.targetEmpty}` : `url(${props.item.icon}) center / contain no-repeat`};
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
`

type TSProps = {
    item: TItem
}

type TProps = {
    item: TItem
    onDropHandler: (id: number) => void
}
export const TargetItem: React.FC<TProps> = (props) => {
    const {onDropHandler: onDrop, ...rest} = props

    const onDragOverHandler: React.DragEventHandler<HTMLDivElement> = e => e.preventDefault()
    const onDragLeaveHandler: React.DragEventHandler<HTMLDivElement> = e => e.preventDefault()

    const onDropHandler: React.DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        onDrop(props.item.id)
    }

    return (
        <StyledTargetItem
            onDragOver={e => onDragOverHandler(e)}
            onDragLeave={e => onDragLeaveHandler(e)}
            onDrop={e => onDropHandler(e)}
            {...rest}>{props.item.value === 0 ? null : <Text text={props.item.value}/>}</StyledTargetItem>
    )
}