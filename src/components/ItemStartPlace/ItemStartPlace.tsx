import React, {memo} from 'react'
import styled from "@emotion/styled";
import FinalForm from "../FinalForm/FinalForm";

const StyledItemStartPlace = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`

type TProps = {
    children: React.ReactNode
}
export const ItemStartPlace: React.FC<TProps> = memo((props) => {
    const {...rest} = props
    return (
        <StyledItemStartPlace {...rest}>
            {props.children}
        </StyledItemStartPlace>
    )
})
ItemStartPlace.displayName = 'ItemStartPlace'
export default ItemStartPlace