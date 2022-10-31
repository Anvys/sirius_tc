import React, {memo, useCallback} from 'react'
import styled from "@emotion/styled";
import {Text} from "../Text/Text";
import {TItem} from "../../utils/Types";


const StyledDraggableItem = styled.div<TSProps>`
  background: url(${props => props.item.icon}) center / contain no-repeat;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.item.icon}

`
type TSProps = Omit<TProps, `onItemStartDrag`>

type TProps = {
    item: TItem
    onItemStartDrag: (id: number) => void
    pos: number
}
export const DraggableItem: React.FC<TProps> = memo((props) => {
    const {onItemStartDrag, ...rest} = props

    const onDragStartHandler = useCallback<React.DragEventHandler>((e) => {
        props.onItemStartDrag(props.item.id)
    }, [props.item.id])

    const onDragLeaveHandler: React.DragEventHandler = (e) => e.preventDefault()
    const onDragEndHandler: React.DragEventHandler = (e) => e.preventDefault()
    const onDragOverHandler: React.DragEventHandler = (e) => e.preventDefault()
    const onDropHandler: React.DragEventHandler = (e) => e.preventDefault()
    return (
        <StyledDraggableItem
            onDragStart={e => onDragStartHandler(e)}
            onDragLeave={e => onDragLeaveHandler(e)}
            onDragEnd={e => onDragEndHandler(e)}
            onDragOver={e => onDragOverHandler(e)}
            onDrop={e => onDropHandler(e)}
            draggable
            {...rest}>
            <Text text={props.item.value}/>
        </StyledDraggableItem>
    )
})
DraggableItem.displayName = 'DraggableItem'
export default DraggableItem